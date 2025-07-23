import React from "react";
import { Card, Typography} from "@material-tailwind/react";

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
    <Card className="relative flex h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden text-center">
      <Card.Header>
        <div className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-black/10 dark:from-black/90 dark:via-black/60 dark:to-black/20" />
        </div>
      </Card.Header>
      <Card.Body className="relative bottom-0 flex h-full flex-col items-center justify-end px-6 py-14 md:px-12">
        <Typography type="h4" className="text-white font-serif">
          {description}
        </Typography>
        <Typography type="h2" className="my-6 text-black py-2 px-4 bg-white rounded-lg shadow-lg">
          {title}
        </Typography>
      </Card.Body>
    </Card>
  );
}
