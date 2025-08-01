import Image from 'next/image';

interface InterviewCardProps {
  nombre: string;
  fecha: string;
  cita: string;
  imagen: string;
}

export default function InterviewCard({ nombre, fecha, cita, imagen }: InterviewCardProps) {
  return (
    <div className='flex flex-col lg:flex-row items-center bg-white/10 p-6 rounded-xl shadow-md gap-6 max-w-4xl mx-auto'>
      
      <div className='flex flex-col items-center lg:w-1/3'>
        <div className='relative w-32 h-32 rounded-full overflow-hidden'>
          <Image src={imagen} alt={`Foto de ${nombre}`} fill className='object-cover' />
        </div>
        <p className='mt-4 text-white text-center'>{nombre}</p>
        <p className='text-gray-300'>{fecha}</p>
      </div>

      <div className='lg:w-2/3 text-white text-lg italic border-l-4 border-white/30 pl-4'>
        “{cita}”
      </div>
    </div>
  );
}
