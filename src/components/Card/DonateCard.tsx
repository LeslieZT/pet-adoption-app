import { Card } from "flowbite-react";
import { MdCalendarMonth, MdOutlineArrowOutward, MdOutlinePets } from "react-icons/md";
import { PiCoinsFill } from "react-icons/pi";
import { Heading } from "../Typography";
import { Paragraph } from "../Typography/Paragraph";
import { CustomButton } from "../Buttons";
import { Link } from "react-router-dom";

interface DonateCardProps {
  icon: "oneTime" | "monthly" | "sponsor";
  title: string;
  description: string;
  variant?: "light" | "dark";
  className?: string;
}

const icons = {
  oneTime: PiCoinsFill,
  monthly: MdCalendarMonth,
  sponsor: MdOutlinePets,
};

export const DonateCard: React.FC<DonateCardProps> = ({
  icon,
  title,
  description,
  variant = "light",
  className = "",
}) => {
  const bgColor = variant === "dark" ? "bg-royal-purple" : "bg-white";
  const headingColor = variant === "dark" ? "white" : "royal-purple";
  const paragraphColor = variant === "dark" ? "tertiary" : "primary";
  const btnColor = variant === "dark" ? "light-royal-purple-2" : "royal-purple";

  const Icon = icons[icon];

  return (
    <Card
      className={` max-w-xs md:max-w-sm border-solid border-2 border-royal-purple ${bgColor} rounded-lg shadow-md ${className}`}
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

        <Link to="/donate">
          <CustomButton
            color={btnColor}
            className="mt-6 py-2 w-auto md: max-w-sm"
          >
            Donate Now <MdOutlineArrowOutward className="ml-2 h-5 w-5" />
          </CustomButton>
        </Link>
      </div>
    </Card>
  );
};
