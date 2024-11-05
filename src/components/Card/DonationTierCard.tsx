import { Card } from "flowbite-react";
import { Heading, Paragraph } from "../Typography";
import { CustomButton } from "../Buttons";
interface DonationTierCardProps {
  title: string;
  subTitle: string;
  description: string;
  price: number;
  type: "montly" | "oneTime";
  isPopular?: boolean;
}

export const DonationTierCard: React.FC<DonationTierCardProps> = ({
  title,
  subTitle,
  description,
  price,
  type,
  isPopular = false,
}) => {
  const bgColor = isPopular ? "bg-royal-purple" : "bg-white";
  const titleColor = isPopular ? "white" : "royal-purple";
  const paragraphColor = isPopular ? "tertiary" : "primary";
  const priceColor = isPopular ? "white" : "lavender-purple";
  const btnColor = isPopular ? "light-royal-purple-2" : "royal-purple";

  const onClick = () => {
    console.log("click");
    console.log(price, type);
  };

  return (
    <Card className={`max-w-80 py-6 ${bgColor}`}>
      <Heading
        level="4"
        color={titleColor}
        className="font-extrabold text-center dark:text-white"
      >
        {title}
      </Heading>
      <Heading
        level="6"
        color="lavender-purple"
        className="font-bold text-center dark:text-white"
      >{`"${subTitle}"`}</Heading>
      <div className="h-auto md:h-52">
        <Paragraph
          size="small"
          color={paragraphColor}
          className="text-justify"
        >
          {description}
        </Paragraph>
      </div>

      <Heading
        level="2"
        color={priceColor}
        className="font-bold dark:text-white"
      >
        {`$${price}`}
        <span className="text-sm">{type === "montly" ? "/month" : ""}</span>
      </Heading>

      <CustomButton
        color={btnColor}
        className="mt-4 py-2"
        onClick={onClick}
      >
        Choose
      </CustomButton>
    </Card>
  );
};
