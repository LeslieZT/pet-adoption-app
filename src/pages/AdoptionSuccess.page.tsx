import { MessageCard } from "../components/Message/Message";

const AdoptionApplicationSuccessPage: React.FC = () => {
  return (
    <>
      <MessageCard
        title="Aplicación de Adopción Exitosa"
        message="Tu aplicación para adoptar ha sido procesada exitosamente. ¡Gracias por considerar darle un hogar a un animal!"
        linkText="Ver mis aplicaciones"
        linkTo="/account/#applications"
      />
    </>
  );
};

export default AdoptionApplicationSuccessPage;
