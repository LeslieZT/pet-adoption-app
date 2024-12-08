import { useEffect, useState } from "react";
import { MessageCard } from "../components/Message/Message";

const VerifyAccountPage: React.FC = () => {
  const [errorDescription, setErrorDescription] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      if (params.get("error")) {
        setErrorDescription(params.get("error_description"));
      }
    }
  }, []);

  return (
    <>
      {errorDescription ? (
        <MessageCard
          title="Error en la Verificación de Cuenta"
          message={errorDescription || "Ocurrió un error durante la verificación de la cuenta."}
          icon="error"
        />
      ) : (
        <MessageCard
          title="Cuenta Verificada"
          message="Tu cuenta ha sido verificada con éxito. ¡Estás listo para empezar a explorar y conectar con tu futuro compañero!"
          linkText="Iniciar Sesión"
          linkTo="/sign-in"
        />
      )}
    </>
  );
};

export default VerifyAccountPage;
