import { Heading } from "../components/Typography";
import { MainLayout } from "../layouts/Main.layout";
import { SearchPet } from "../view/Adoption/SearchPet";

const AdoptionPage: React.FC = () => {
  return (
    <MainLayout>
      <Heading
        level="2"
        color="royal-purple"
        className="text-center font-medium mt-16"
      >
        Every Pet Deserves a Loving Home. <span className="text-lavender-purple">Adopt</span> a Pet
        Today
      </Heading>
      <SearchPet />
    </MainLayout>
  );
};

export default AdoptionPage;
