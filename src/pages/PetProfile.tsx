import { useParams } from "react-router-dom";

const PetProfilePage: React.FC = () => {
  const { petId } = useParams<{ petId: string }>();
  return (
    <div>
      <h1>Pet Profile</h1>
      <p>Pet ID: {petId}</p>
    </div>
  );
};

export default PetProfilePage;
