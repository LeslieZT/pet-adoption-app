import { MessageCard } from "../components/Message/Message";

const DonationFailPage: React.FC = () => {
  return (
    <MessageCard
      title="Donation Failed"
      message="We encountered an issue while processing your donation. Please try again or contact support for assistance."
    />
  );
};

export default DonationFailPage;
