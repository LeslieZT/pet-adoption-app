import { DonationSection } from "../components/Donation/DonationSection";
import { Heading, Paragraph } from "../components/Typography";

export const DonationPage: React.FC = () => {
  return(
    <div className="mx-auto min-w-[300px] max-w-screen-2xl px-4">
      <Heading
        level="2"
        color="royal-purple"
        className="text-center font-medium mt-16"
      >
       With your help, we can be part of more pet love stories
      </Heading>

      <Paragraph className="text-center mt-6">
      Every donation makes a big difference in the lives of the animals we care for. Choose one of our plans or enter the amount you'd like to contribute
      </Paragraph>
      <DonationSection  />
    </div>
  )
};