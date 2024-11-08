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
          With your help, we can be part of more pet love stories
        </Heading>

        <Paragraph className="text-center mt-6">
          Every donation makes a big difference in the lives of the animals we care for. Choose one
          of our plans or enter the amount you'd like to contribute
        </Paragraph>
        <DonationSection />
      </MainLayout>
      <img
        src="./src/assets/donation_dog.png"
        alt="donation-icons"
        className="w-full h-96 object-cover -mt-36 md:-mt-16 pb-20 md:pb-14"
      />
    </>
  );
};

export default DonationPage;
