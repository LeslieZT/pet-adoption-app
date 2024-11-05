import { Heading } from "../components/Typography";
import { SearchPet } from "../view/Adoption/SearchPet";

const AdoptionPage: React.FC = () => {
  return (
    <div className="mx-auto min-w-[300px] max-w-screen-2xl p-4">
      <Heading
        level="2"
        color="royal-purple"
        className="text-center font-medium mt-16"
      >
        Every Pet Deserves a Loving Home. <span className="text-lavender-purple">Adopt</span> a Pet
        Today
      </Heading>
      <SearchPet />
    </div>
  );
};

export default AdoptionPage;
