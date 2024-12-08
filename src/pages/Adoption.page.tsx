import { Heading } from "../components/Typography";
import { MainLayout } from "../layouts/Main.layout";
import { SearchPet } from "../view/Adoption/SearchPet";

const AdoptionPage: React.FC = () => {
  return (
    <MainLayout>
      <Heading
        level="2"
        color="royal-purple"
        className="text-center font-medium mt-4"
      >
        Cada mascota merece un hogar lleno de amor.{" "}
        <span className="text-lavender-purple">Adopta</span> una mascota hoy
      </Heading>
      <SearchPet />
    </MainLayout>
  );
};

export default AdoptionPage;
