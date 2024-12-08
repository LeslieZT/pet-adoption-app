import { MdOutlineArrowOutward } from "react-icons/md";
import { CustomButton } from "../../components/Buttons";
import { Paragraph, SubTitle } from "../../components/Typography";
import { PetGallery } from "./PetGallery";
import { Link } from "react-router-dom";

export const GallerySection: React.FC = () => {
  return (
    <section className="py-6 md:py-20 grid md:grid-cols-2 gap-6 md:gap-10 xl:gap-20">
      <div className="flex flex-col items-start justify-center gap-6 md:gap-8">
        <SubTitle className="text-justify md:text-left">
          ¡Dale una segunda oportunidad a un amigo que te necesita!
        </SubTitle>
        <Paragraph className="text-justify">
          Miles de animales esperan por un hogar lleno de amor y cuidado. Al adoptar, no solo
          encontrarás un compañero fiel, sino que también salvarás una vida que merece una familia.
          Cada peludito rescatado tiene una historia, y tú puedes ser el comienzo de su final feliz.
          ¡Adopta y haz la diferencia hoy mismo!
        </Paragraph>

        <Link to="/adopt">
          <CustomButton className="py-2 w-60 hidden md:block btn-gallery">
            Explorar Mascotas <MdOutlineArrowOutward className="ml-2 h-5 w-5" />
          </CustomButton>
        </Link>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <PetGallery />

        <Link to="/adopt">
          <CustomButton className="mt-4 py-2 w-48 md:hidden">
            Explorar Mascotas <MdOutlineArrowOutward className="ml-2 my-auto h-5 w-5" />
          </CustomButton>
        </Link>
      </div>
    </section>
  );
};
