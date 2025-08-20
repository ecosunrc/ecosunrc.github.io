'use client';

import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { XCircleIcon, ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import 'react-pdf/dist/Page/TextLayer.css';
import Image from 'next/image';
import Loading from './Loading';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer({ file, onlyView = false }: { file: string, onlyView?: boolean }) {
  const [numPages, setNumPages] = useState(0);
  const [showFull, setShowFull] = useState(false);
  const [twoPages, setTwoPages] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [zoom, setZoom] = useState(window.innerWidth < 500 ? 0.6 : 1);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);


  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setCurrentIndex(1);
  };

  const handleZoomChange = (value: number) => {
    const newZoom = Math.max(0.5, Math.min(2, value));
    setZoom(newZoom);
  };

  const adjustZoom = (delta: number) => {
    handleZoomChange(zoom + delta);
  };

  const goPrev = () => {
    if (twoPages) {
      if (currentIndex === 1) return;
      if (currentIndex === numPages && numPages % 2 === 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(Math.max(1, currentIndex - 2));
      }
    }
  };

  const goNext = () => {
    if (twoPages) {
      if (currentIndex >= numPages - 1) return;
      if (currentIndex === 1) {
        setCurrentIndex(2);
      } else if (currentIndex + 2 >= numPages) {
        setCurrentIndex(numPages);
      } else {
        setCurrentIndex(currentIndex + 2);
      }
    }
  };
  
  const toggleFullScreen = () => {
    if (window.innerWidth < 500) {
      setZoom(0.6);
    } else {
      setZoom(1);
    }
    setShowFull(false);
    setCurrentIndex(1);
    setTwoPages(false);
  };

  const renderTwoPages = () => {
    const pages = [];

    if (currentIndex === 1) {
      pages.push(
        <div key={1} className='flex justify-center my-4'>
          <Page
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={zoom}
            loading={<Loading />}
          />
        </div>
      );
    } else if (currentIndex === numPages && numPages % 2 === 0) {
      pages.push(
        <div key={numPages} className='flex justify-center my-4'>
          <Page
            pageNumber={numPages}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={zoom}
            loading={<Loading />}
          />
        </div>
      );
    } else {
      pages.push(
        <div key={currentIndex} className='flex justify-center my-4'>
          <Page
            pageNumber={currentIndex}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={zoom}
            loading={<Loading />}
          />
          {currentIndex + 1 <= numPages && (
            <Page
              pageNumber={currentIndex + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              scale={zoom}
              loading={<Loading />}
            />
          )}
        </div>
      );
    }

    return pages;
  };
  
  if (onlyView) {
  return (
    <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading={<Loading/>}>
      <Page pageNumber={1} height={isMobile ? 212 : 464} renderAnnotationLayer={false} renderTextLayer={false} loading={<Loading/>}/>
    </Document>
  );
}
  const renderAllPages = () =>
    Array.from({ length: numPages }, (_, i) => (
      <Page
        key={i}
        pageNumber={i + 1}
        renderAnnotationLayer={false}
        renderTextLayer={false}
        scale={zoom}
        loading={<Loading />}
        className='my-4 shadow-lg'
      />
    ));

  return (
    <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading={<Loading />}>
      {!showFull ? (
        <div className='relative items-center'>
          <Page
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={zoom}
            loading={<Loading />}
            className='my-4 shadow-xl'
          />
          <button
            onClick={() => setShowFull(true)}
            className='absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 bg-black w-full opacity-80 rounded hover:opacity-100 transition cursor-pointer justify-center flex'
          >
            <Image
              src='/imagenes/ico/show.svg'
              alt='Ver PDF completo'
              width={40}
              height={40}
            />
          </button>
        </div>
      ) : (
        <div className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center'>
          <div className='relative rounded-lg p-4 w-fit max-h-[90vh] overflow-y-auto'>
            {/* Controles */}
            <div className='flex justify-between items-center mb-4 px-2'>
              {/* Botón cerrar */}
              <button
                onClick={() => toggleFullScreen()}
                className='absolute top-2 right-2 text-white hover:text-red-500 z-70 cursor-pointer'
              >
                <XCircleIcon className='w-10 h-10' />
              </button>
              <div className='absolute fixed z-70 top-16 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-fit gap-2'>
                <button onClick={() => adjustZoom(-0.1)} className='bg-base2 p-1 rounded cursor-pointer hover:text-white'>
                  <MinusIcon className='h-5 w-5' />
                </button>
                <span className='text-black font-button bg-base2 p-1 rounded text-sm'>{Math.round(zoom * 100)}%</span>
                <button onClick={() => adjustZoom(0.1)} className='bg-base2 p-1 rounded cursor-pointer hover:text-white'>
                  <PlusIcon className='h-5 w-5' />
                </button>
              </div>
              <div className='absolute fixed z-70 top-4 left-1/2 transform -translate-x-1/2 items-center flex justify-between gap-4'>
                {twoPages && <button
                  onClick={goPrev}
                  className='bg-gray-100 hover:bg-gray-300 p-2 rounded-full disabled:opacity-50 cursor-pointer'
                  disabled={currentIndex <= 1}
                >
                  <ChevronLeftIcon className='h-6 w-6' />
                </button>
                }
                <button
                  onClick={() => setTwoPages(!twoPages)}
                >
                  <Image
                    src={twoPages ? '/imagenes/ico/book.svg' : '/imagenes/ico/open-book.svg'}
                    alt='Toggle view'
                    width={40}
                    height={40}
                    className='scale-95 hover:scale-100 bg-base1 p-1 rounded cursor-pointer transition-all duration-300'
                  />
                </button>
                {twoPages && <button
                  onClick={goNext}
                  className='bg-gray-100 hover:bg-gray-300 p-2 rounded-full disabled:opacity-50 cursor-pointer'
                  disabled={currentIndex >= numPages}
                >
                  <ChevronRightIcon className='h-6 w-6' />
                </button>
                }
              </div>
            </div>

            {/* Renderizado */}
            <div className='flex flex-col items-center justify-center'>
              {twoPages ? renderTwoPages() : renderAllPages()}
            </div>
          </div>
        </div>
      )}
    </Document>
  );
}
