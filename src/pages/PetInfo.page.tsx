import { useParams } from "react-router-dom";
import { MainLayout } from "../layouts/Main.layout";
import { PetProfile } from "../view/PetInfo/PetProfile";

const PetInfoPage: React.FC = () => {
  const { petId } = useParams<{ petId: string }>();

  if (!petId) {
    return <div>Not Found</div>;
  }

  return (
    <MainLayout>
      <PetProfile
        id={petId}
        key={petId}
      ></PetProfile>
    </MainLayout>
  );
};

export default PetInfoPage;
