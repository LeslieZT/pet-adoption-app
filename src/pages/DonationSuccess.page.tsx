import { MessageCard } from "../components/Message/Message";

const DonationSuccessPage: React.FC = () => {
  return (
    <>
      <MessageCard
        title="Donation Successful"
        message="Your donation has been processed successfully. Thank you for supporting shelters and making a difference!"
      />
    </>
  );
};

export default DonationSuccessPage;
