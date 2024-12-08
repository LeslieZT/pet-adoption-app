import { Modal } from "flowbite-react";
import { CustomButton } from "../Buttons";
import { Link } from "react-router-dom";

interface ModalCustomProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ModalCustom: React.FC<ModalCustomProps> = ({ open, setOpen }) => {
  return (
    <Modal
      show={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>¡Bienvenido! Solo Un Paso Más para Acceder</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base  text-justify leading-relaxed text-gray-500 dark:text-gray-400">
            Para continuar con esta acción, necesitas estar registrado y haber iniciado sesión en tu
            cuenta. Si aún no tienes cuenta con nosotros, no te preocupes, ¡es muy fácil crear una!
          </p>
          <p className="text-base text-justifyleading-relaxed text-gray-500 dark:text-gray-400">
            Únete a nuestra familia y empieza a disfrutar de todos los beneficios hoy mismo.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <CustomButton>
          <Link to="/sign-in">Inicia Sesión</Link>
        </CustomButton>
        <CustomButton color="light-pastel-lilac">
          <Link to="/sign-up">Regístrate</Link>
        </CustomButton>
      </Modal.Footer>
    </Modal>
  );
};
