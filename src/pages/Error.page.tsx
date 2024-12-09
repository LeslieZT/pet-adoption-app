import { MessageCard } from "../components/Message/Message";

export const ErrorPage: React.FC = () => {
  return (
    <MessageCard
      title="Algo salió mal"
      message="Hubo un problema, por favor intenta nuevamente más tarde."
    />
  );
};
