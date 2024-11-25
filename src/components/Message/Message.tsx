import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { MdError } from "react-icons/md";
import { BsPatchCheckFill } from "react-icons/bs";
import { Heading, Paragraph } from "../Typography";

import { CustomButton } from "../Buttons";

interface MessageProps {
  title: string;
  message: string;
  linkText?: string;
  linkTo?: string;
  icon?: "success" | "error";
}

const icons = {
  success: BsPatchCheckFill,
  error: MdError,
};

export const MessageCard: React.FC<MessageProps> = ({
  title,
  message,
  linkText,
  linkTo,
  icon = "success",
}) => {
  const Icon = icons[icon];
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] p-4">
      <Card className="w-full max-w-2xl p-8">
        <Heading
          level="1"
          color="royal-purple"
          className="font-bold text-center"
        >
          {title}
        </Heading>
        <div className="my-4 flex items-center justify-center">
          <Icon className={`h-16 w-16 text-royal-purple`} />
        </div>
        <Paragraph
          size="large"
          className="text-center"
        >
          {message}
        </Paragraph>

        {linkText && linkTo && (
          <div className="flex justify-center w-full mt-4">
            <CustomButton className="w-40">
              <Link
                className=""
                to={linkTo}
              >
                {linkText}
              </Link>
            </CustomButton>
          </div>
        )}
      </Card>
    </div>
  );
};
