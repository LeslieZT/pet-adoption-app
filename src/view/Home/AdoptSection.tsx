import { AdoptCard } from "../../components/Card";
import { Paragraph, SubTitle } from "../../components/Typography";

export const AdoptSection: React.FC = () => {
  return (
    <section className="py-6 md:py-20 grid md:grid-cols-2 gap-6 md:gap-10 xl:gap-20">
      <div className="order-last md:order-first">
        <img
          src="/src/assets/adopt.png"
          alt="Cat being petted"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-start justify-center gap-6 md:gap-8">
        <SubTitle className="text-justify md:text-left">How to Adopt Your New Friend</SubTitle>
        <Paragraph className="text-justify">
          Ready to bring home your new best friend? Explore, meet, adopt, and start your journey of
          love and joy today!.
        </Paragraph>
        <div className="grid grid-cols-2 gap-4">
          <AdoptCard
            icon="findPet"
            title="1. Find Pet Match"
            description="Explore our website and find the perfect pet that steals your heart."
          />
          <AdoptCard
            icon="application"
            title="2. Complete Application"
            description="Complete the adoption application."
          />
          <AdoptCard
            icon="contact"
            title="3. Meet and Greet"
            description="Our team will contact you to arrange a meeting with your new furry friend. This ensures a perfect match!"
          />

          <AdoptCard
            icon="takeThemHome"
            title="4. Prepare for Their Arrival"
            description="Get your home ready with the basics: food, water bowls, a cozy bed, and toys to welcome your pet home."
          />

          <AdoptCard
            icon="paperwork"
            title="5. Finalize the Adoption"
            description="Once everything is set, we'll complete the paperwork, and your pet will be ready to go home with you!"
          />

          <div className="flex items-end justify-end">
            <img
              src="./src/assets/cat-icon.png"
              alt="dog-icon"
              className="h-26 w-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
