import { FaSquareInstagram, FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { Paragraph } from "../Typography";

export const FooterApp: React.FC = () => {
  return (
    <footer className="bg-pastel-lilac-light">
      <div className="flex justify-between items-center mx-auto min-w-[300px] max-w-screen-2xl  h-16 ">
      
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
