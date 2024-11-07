import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

interface SubtitleApplicationProps {
    title: string;  
    paragraph: string;
}   


export const SubtitleApplication: React.FC<SubtitleApplicationProps> = ({ title, paragraph }) => {
  return (
    <div className="mb-4">
      <Heading level="4" color="lavender-purple" className="font-semibold">
        {title}
      </Heading>
      <Paragraph className="mt-2">{paragraph}</Paragraph>
    </div>
  );
};