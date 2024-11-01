import { Card } from "flowbite-react";
import { Heading } from "../Typography";
import { Paragraph } from "../Typography/Paragraph";

interface CardAdoptProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const CardAdopt: React.FC<CardAdoptProps> = ({ icon, title, description }) => {
  return (
    <Card className="max-w-sm bg-pastel-lilac-light border-solid border-2 border-pastel-lilac rounded-lg shadow-md">
      <div className="flex flex-col items-start justify-center gap-3">
        {icon}
        <Heading
          level="5"
          color="royal-purple"
          className="font-medium"
        >
          {title}
        </Heading>
        <Paragraph
          size="small"
          className="text-justify"
        >
          {description}
        </Paragraph>
      </div>
    </Card>
  );
};

