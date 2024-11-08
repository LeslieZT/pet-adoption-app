import { FaSquareInstagram, FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { Paragraph } from "../Typography";

export const FooterApp: React.FC = () => {
  return (
    <footer className="bg-pastel-lilac-light absolute bottom-0 w-full">
      <div className="mx-auto min-w-[300px] max-w-screen-2xl flex gap-2 p-4 flex-col md:flex-row justify-center md:justify-between items-center">
        <Paragraph
          color="secondary"
          size="small"
        >
          © 2024 HappyPaws. All rights reserved.
        </Paragraph>

        <div className="flex items-center justify-center gap-4 text-lavender-purple text-2xl">
          <FaSquareInstagram />
          <FaSquareFacebook />
          <FaSquareTwitter />
        </div>
      </div>
    </footer>
  );
};
