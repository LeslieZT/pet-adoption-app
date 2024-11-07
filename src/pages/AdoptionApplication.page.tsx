import { useParams } from "react-router-dom";
import { Heading, Paragraph, SubtitleApplication } from "../components/Typography";
import { AdoptionForm } from "../view/Adoption/AdoptionForm";
import { PetAdoptCard } from "../components/Card";

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

      <div className="mt-10 grid md:grid-cols-3 md:grid-rows-auto gap-6 md:gap-10">
        <div className=" order-2 md:order-1 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-4">
          <SubtitleApplication
            title="1. Complete Your Adoption Application"
            paragraph="Fill out a quick form to provide us with the details we need to finalize the adoption"
          />
          <AdoptionForm petId={petId} />
        </div>
        <div className="order-1 md:order-2 md:col-start-3  md:col-end-4 md:row-start-1 md:row-end-3">
          <PetAdoptCard
            referenceCode={petId}
            name="Doggy"
            breed="Bulldog"
            age="1y, 2m"
            gender="male"
            weight="100"
            height="100"
            color="black"
            imageUrl="../../src/assets/section1_hamster.jpg"
          />
        </div>
        <div className="order-3 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4 ">
          <Heading
            level="3"
            className="font-semibold mb-4"
          >
            Next Steps
          </Heading>
          <SubtitleApplication
            title="2. Meet and Greet"
            paragraph="Our team will contact you to arrange a meeting with your new furry friend. This ensures a perfect match!"
          />
          <SubtitleApplication
            title="3. Prepare for Their Arrival"
            paragraph="Get your home ready with the basics: food, water bowls, a cozy bed, and toys to welcome your pet home."
          />
          <SubtitleApplication
            title="4. Finalize the Adoption"
            paragraph="Once everything is set, we'll complete the paperwork, and your pet will be ready to go home with you!"
          />
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end mb-10 mt-4 w-full">
        <img
          src="../../src/assets/cat-icon.png"
          alt="dog-icon"
          className="h-26 w-28 md:h-60 md:w-40"
        />
      </div>
    </div>
  );
};

export default AdoptionApplicationPage;
