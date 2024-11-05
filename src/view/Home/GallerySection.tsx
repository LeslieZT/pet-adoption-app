import { MdOutlineArrowOutward } from "react-icons/md";
import { CustomButton } from "../../components/Buttons";
import { Paragraph, SubTitle } from "../../components/Typography";
import { PetGallery } from "./PetGallery";
import { Link } from "react-router-dom";

export const GallerySection: React.FC = () => {
  return (
    <section className="px-4 py-8 md:py-20 grid md:grid-cols-2 gap-6 md:gap-10 xl:gap-20">
      <div className="flex flex-col items-start justify-center gap-6 md:gap-8">
        <SubTitle className="text-justify md:text-left">
          Find Out Which Furry Friend Fits You Best!
        </SubTitle>
        <Paragraph className="text-justify">
          Take a stroll through our furry family and uncover the ideal companion that perfectly
          matches your lifestyle and personality. Whether you're seeking a playful pal for outdoor
          adventures or a cuddly companion for cozy nights in, our diverse selection of pets awaits
          your discovery.
        </Paragraph>

        <Link to="/adopt">
          <CustomButton className="py-2 w-60 hidden md:block btn-gallery">
            Explore Pets <MdOutlineArrowOutward className="ml-2 h-5 w-5" />
          </CustomButton>
        </Link>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <PetGallery />

        <Link to="/adopt">
          <CustomButton className="mt-4 py-2 w-48 md:hidden">
            Explore Pets <MdOutlineArrowOutward className="ml-2 h-5 w-5" />
          </CustomButton>
        </Link>
      </div>
    </section>
  );
};
