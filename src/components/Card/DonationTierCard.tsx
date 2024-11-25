import { Card } from "flowbite-react";
import { Heading, Paragraph } from "../Typography";
import { CustomButton } from "../Buttons";
import { User } from "../../types/User.types";
import * as DonationService from "../../services/donation.service";
import { PaymentMode } from "../../types/Donation.types";

interface DonationTierCardProps {
  productId: string;
  title: string;
  subTitle: string;
  description: string;
  price: string;
  type: PaymentMode;
  isPopular?: boolean;
  user: User | null;
}

export const DonationTierCard: React.FC<DonationTierCardProps> = ({
  productId,
  title,
  subTitle,
  description,
  price,
  type,
  isPopular = false,
  user,
}) => {
  const bgColor = isPopular ? "bg-royal-purple" : "bg-white";
  const titleColor = isPopular ? "white" : "royal-purple";
  const paragraphColor = isPopular ? "tertiary" : "primary";
  const priceColor = isPopular ? "white" : "lavender-purple";
  const btnColor = isPopular ? "light-royal-purple-2" : "royal-purple";

  const onClick = async () => {
    try {
      const response = await DonationService.donate({
        code: productId,
        mode: type,
        amount: parseInt(price, 10),
        idUser: user?.id,
        channel: user?.channel,
      });
      if (response?.data) {
        window.location.replace(response.data?.url);
      }
    } catch (error) {
      console.log(error);
    }
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
      <div className="h-auto md:h-32">
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
        <span className="text-sm">{type === "subscription" ? "/month" : ""}</span>
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
