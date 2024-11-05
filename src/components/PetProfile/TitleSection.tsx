import { PiNewspaperClipping, PiPawPrint } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { SiWeightsandbiases } from "react-icons/si";
import { Heading } from "../Typography";

const icons = {
  about: PiPawPrint,
  information: PiNewspaperClipping,
  behavior: SiWeightsandbiases,
  includeCare: LuClipboardList,
  location: FaMapLocationDot,
};

export interface TitleSectionPetProfileProps {
  title: string;
  icon: keyof typeof icons;
}

export const TitleSectionPetProfile: React.FC<TitleSectionPetProfileProps> = ({ title, icon }) => {
  const Icon = icons[icon];
  return (
    <div className="flex items-center gap-2 text-royal-purple">
      <Icon className="h-5 w-5 md:h-6 md:w-6 " />
      <Heading
        level="4"
        className="font-bold"
      >
        {title}
      </Heading>
    </div>
  );
};
