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
            title="Find Pet Match"
            description="Explore our website and find the perfect pet that steals your heart."
          />
          <AdoptCard
            icon="contact"
            title="Contact and Meet"
            description="Contact the shelter to meet the pet and see if it's a match."
          />
          <AdoptCard
            icon="paperwork"
            title="Complete Paperwork"
            description="Complete the application and fee to finalize adoption."
          />
          <AdoptCard
            icon="takeThemHome"
            title="Take Them Home"
            description="Bring your new furry friend home and start making memories together!"
          />
        </div>
      </div>
    </section>
  );
};
