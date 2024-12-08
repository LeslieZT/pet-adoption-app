import { MessageCard } from "../components/Message/Message";

const ContactSuccessPage: React.FC = () => {
  return (
    <>
      <MessageCard
        title="Formulario Enviado"
        message="Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo lo antes posible. ¡Gracias por escribirnos!"
      />
    </>
  );
};

export default ContactSuccessPage;
