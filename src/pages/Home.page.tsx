import { MainLayout } from "../layouts/Main.layout";
import { GallerySection, AdoptSection, DonateSection } from "../view/Home";

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <GallerySection />
      <AdoptSection />
      <DonateSection />
    </MainLayout>
  );
};

export default HomePage;
