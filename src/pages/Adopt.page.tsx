import { SearchPet } from "../components/Adopt/SearchPet";
import { Heading } from "../components/Typography";

export const AdoptPage: React.FC = () => {
  return (
    <div className="mx-auto min-w-[300px] max-w-screen-2xl">
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
