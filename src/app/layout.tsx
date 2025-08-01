import type { Metadata } from 'next'
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ECOS',
  description: 'ECOS - UNRC es la revista digital de la Universidad Nacional de Río Cuarto, Argentina. Aquí encontrarás artículos, noticias y recursos sobre ciencia, tecnología y cultura.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      </head>
      <body className='max-w-screen-sm sm:max-w-screen mx-auto'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
