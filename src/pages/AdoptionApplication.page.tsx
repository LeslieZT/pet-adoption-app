import { useParams } from "react-router-dom";
import { Heading, Paragraph } from "../components/Typography";
import { AdoptionForm } from "../view/Adoption/AdoptionForm";

const AdoptionApplicationPage: React.FC = () => {
  const { petId } = useParams<{ petId: string }>();

  if (!petId) {
    return <div>Not Found</div>;
  }

  return (
    <div className="mx-auto min-w-[300px] max-w-screen-2xl p-4">
      <Heading
        level="2"
        color="royal-purple"
        className="text-center font-medium mt-12"
      >
        You've Chosen Your New Best Friend!
      </Heading>

      <Paragraph className="text-center mt-6">
        Thank you for giving a loving home to one of our rescued pets! You're one step closer to
        changing a life—here's what comes next:
      </Paragraph>
      <AdoptionForm petId={petId}></AdoptionForm>
    </div>
  );
};

export default AdoptionApplicationPage;
