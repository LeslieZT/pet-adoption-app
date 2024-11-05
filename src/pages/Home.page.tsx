import { GallerySection, AdoptSection, DonateSection } from "../view/Home";

const HomePage: React.FC = () => {
  return (
    <main className="mx-auto min-w-[300px] max-w-screen-2xl p-4">
      <GallerySection />
      <AdoptSection />
      <DonateSection />
    </main>
  );
};

export default HomePage;
