import { Card, Typography} from '@material-tailwind/react';

interface BackgroundBlogCardProps {
  title: string;
  description: string;
  image: string;
}

export default function BackgroundBlogCard({
  title,
  description,
  image,
}: BackgroundBlogCardProps) {
  return (
    <Card className='relative flex w-full max-w-[16rem] flex-col items-end justify-center overflow-hidden text-center h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh]'>
      <Card.Header>
        <div className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}>
          <div className='absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-black/10' />
        </div>
      </Card.Header>
      <Card.Body className='relative bottom-0 flex h-full flex-col items-center justify-end px-1 lg:px-6'>
        <p className='text-white'>
          {description}
        </p>
        <h4 className='my-6 text-black p-0 px-2 lg:px-4 lg:py-2 bg-white rounded-lg shadow-lg'>
          {title}
        </h4>
      </Card.Body>
    </Card>
  );
}
