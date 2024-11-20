import { useEffect, useState } from "react";
import { MessageCard } from "../components/Message/Message";

const VerifyAccountPage: React.FC = () => {
  const [errorDescription, setErrorDescription] = useState<string | null>(null);

  useEffect(() => {
    // Obtén el hash completo
    const hash = window.location.hash;

    if (hash) {
      // Elimina el símbolo '#' y procesa los parámetros
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
          title="Account Verification Failed"
          message={errorDescription || "An error occurred during account verification."}
          icon="error"
        />
      ) : (
        <MessageCard
          title="Account Verified"
          message="Your account has been successfully verified. You’re ready to start exploring and connecting with your future companion!"
          linkText="Sign In"
          linkTo="/sign-in"
        />
      )}
    </>
  );
};

export default VerifyAccountPage;
