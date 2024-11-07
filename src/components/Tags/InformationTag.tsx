import { twMerge } from "tailwind-merge";
import { Heading, Paragraph } from "../Typography";

interface InformationTagProps {
  name: string;
  value: string;
  gender: "male" | "female";
}

export const InformationTag: React.FC<InformationTagProps> = ({ name, value, gender }) => {
  const bgColor = gender === "male" ? "bg-aqua-blue-light" : "bg-vibrant-pink-light";
  const textColor = gender === "male" ? "aqua-blue" : "vibrant-pink";

  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center p-1 md:py-3 md:px-4 rounded-lg w-32 md:w-auto",
        bgColor,
      )}
    >
      <Paragraph
        size="medium"
        color="primary"
      >
        {name}
      </Paragraph>
      <Heading
        level="6"
        color={textColor}
        className="font-medium"
      >
        {value}
      </Heading>
    </div>
  );
};
