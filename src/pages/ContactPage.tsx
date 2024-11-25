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
        Contact us
      </Heading>

      <Paragraph className="text-center mt-6">
        Do you have questions? We are here to help you. Get in touch with us
      </Paragraph>
      <ContactForm />
    </MainLayout>
  );
};

export default ContactPage;
