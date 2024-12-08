import { MainLayout } from "../layouts/Main.layout";
import { Heading, Paragraph } from "../components/Typography";
import { DonationSection } from "../view/Donation/DonationSection";

const DonationPage: React.FC = () => {
  return (
    <>
      <MainLayout>
        <Heading
          level="2"
          color="royal-purple"
          className="text-center font-medium mt-12"
        >
          Tu apoyo nos ayudará a crear más finales felices para las mascotas que tanto lo necesitan.
        </Heading>
        <Paragraph className="text-center mt-6">
          Cada donación marca una gran diferencia en la vida de los animales que cuidamos. Elige uno
          de nuestros planes o ingresa el monto que deseas aportar.
        </Paragraph>
        <DonationSection />
      </MainLayout>
    </>
  );
};

export default DonationPage;
