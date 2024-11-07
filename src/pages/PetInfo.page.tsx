import { useParams } from "react-router-dom";
import { PetProfile } from "../view/PetInfo/PetProfile";

const PetInfoPage: React.FC = () => {
  const { petId } = useParams<{ petId: string }>();

  if (!petId) {
    return <div>Not Found</div>;
  }

  return (
    <div className="mx-auto min-w-[300px] max-w-screen-2xl p-4">
      <PetProfile id={petId}></PetProfile>
    </div>
  );
};

export default PetInfoPage;
