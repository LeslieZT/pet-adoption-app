import { Heading, Paragraph } from "../components/Typography";
import { MainLayout } from "../layouts/Main.layout";
import { ContactForm } from "../view/Contact/ContactForm";

export const ContactPage: React.FC = () => {
  return (
    <MainLayout>
      <Heading
        level="2"
        color="royal-purple"
        className="text-center font-medium mt-12"
      >
        Contacta con nosotros
      </Heading>

      <Paragraph className="text-center mt-6">
        ¿Tienes preguntas? Estamos aquí para ayudarte. Ponte en contacto con nosotros
      </Paragraph>
      <ContactForm />
    </MainLayout>
  );
};

export default ContactPage;
