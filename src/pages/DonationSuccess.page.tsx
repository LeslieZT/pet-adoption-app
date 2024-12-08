import { MessageCard } from "../components/Message/Message";

const DonationSuccessPage: React.FC = () => {
  return (
    <>
      <MessageCard
        title="Donación Exitosa"
        message="Tu donación ha sido procesada exitosamente. ¡Gracias por apoyar a los refugios y hacer la diferencia!"
      />
    </>
  );
};

export default DonationSuccessPage;
