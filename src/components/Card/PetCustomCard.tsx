import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowOutward, MdOutlinePets } from "react-icons/md";
import { PiCoinsFill } from "react-icons/pi";
import { Heading } from "../Typography";
import { Paragraph } from "../Typography/Paragraph";
import { CustomButton } from "../Buttons";

interface PetCustomCardProps {
  icon: "donate" | "adopt";
  title: string;
  description: string;
  gender: "male" | "female";
  variant?: "light" | "dark";
  className?: string;
  isAdopt?: boolean;
  handleClick?: () => void;
}

const icons = {
  donate: PiCoinsFill,
  adopt: MdOutlinePets,
};

export const PetCustomCard: React.FC<PetCustomCardProps> = ({
  icon,
  title,
  description,
  gender,
  variant = "light",
  className = "",
  isAdopt = false,
  handleClick = () => {},
}) => {
  const navigate = useNavigate();
  const primaryColor = gender === "male" ? "aqua-blue" : "vibrant-pink";
  const secondaryColor = gender === "male" ? "light-aqua-blue" : "light-vibrant-pink";

  const bgColor = variant === "dark" ? `bg-${primaryColor}` : "bg-white";
  const headingColor = variant === "dark" ? "white" : primaryColor;
  const paragraphColor = variant === "dark" ? "tertiary" : "primary";
  const btnColor = variant === "dark" ? secondaryColor : primaryColor;

  const Icon = icons[icon];

  const handleClickButton = () => {
    if (isAdopt) {
        handleClick()
    } else {
      navigate('/donate');
    }
  };

  return (
    <Card
      className={`min-w-[16rem] md:max-w-[30rem] border-solid border-2 border-${primaryColor} ${bgColor} rounded-lg shadow-md ${className}`}
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <Icon className={`h-8 w-8 text-${headingColor}`} />
        <Heading
          level="5"
          color={headingColor}
          className="font-medium"
        >
          {title}
        </Heading>
        <Paragraph
          size="small"
          color={paragraphColor}
          className="text-justify"
        >
          {description}
        </Paragraph>

        
          <CustomButton
            onClick={handleClickButton}
            color={btnColor}
            className="mt-6 py-2 w-auto md: max-w-sm"
          >
            {isAdopt ? "Adoptar": "Donar"} Ahora <MdOutlineArrowOutward className="ml-2 h-5 w-5" />
          </CustomButton>
 
      </div>
    </Card>
  );
};
