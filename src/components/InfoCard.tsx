import React from "react";

interface InfoCardProps {
  title: string;
  content: React.ReactNode;
  bgColor?: string;
  accentColor?: string;
}


export default function InfoCard({
  title,
  content,
  bgColor = "bg-orange-300",
  accentColor = "green-900",
}: InfoCardProps) {
  return (
    <div
      className={`relative flex flex-col p-4 rounded-md shadow-md ${bgColor} text-${accentColor} w-fit max-w-sm`}
    >
      <div
        className={`absolute -top-4 left-4 bg-${accentColor} rounded-md p-1`}
      >
        <h3 className="px-2">!</h3>
      </div>

      <div className="mt-8">
        <h3 className="uppercase">
          {title}
        </h3>
        {content}
      </div>
    </div>
  );
}
