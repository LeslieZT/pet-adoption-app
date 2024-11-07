import { Card } from "flowbite-react";
import { MdOutlinePets, MdConnectWithoutContact } from "react-icons/md";
import { TbHomeHeart } from "react-icons/tb";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { Heading } from "../Typography";
import { Paragraph } from "../Typography/Paragraph";
import { PiCertificateFill } from "react-icons/pi";

interface AdoptCardProps {
  icon: "findPet" | "contact" | "paperwork" | "takeThemHome" | "application";
  title: string;
  description: string;
}
const icons = {
  findPet: MdOutlinePets,
  contact: MdConnectWithoutContact,
  application: HiMiniClipboardDocumentList,
  takeThemHome: TbHomeHeart,
  paperwork: PiCertificateFill
};

export const AdoptCard: React.FC<AdoptCardProps> = ({ icon, title, description }) => {
  const Icon = icons[icon];

  return (
    <Card className="max-w-sm bg-pastel-lilac-light border-solid border-2 border-pastel-lilac rounded-lg shadow-md">
      <div className="flex flex-col items-start justify-center gap-3">
        <Icon className="h-8 w-8 text-royal-purple" />
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
