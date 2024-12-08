import { useForm } from "react-hook-form";
import { useState } from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomButton } from "../../components/Buttons";
import { InputField, TextareaField } from "../../components/Forms";
import { ContactFormData, ContactSchema } from "../../schema/Contact.schema";
import * as ContactService from "../../services/contact.service";

export const ContactForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const { control, handleSubmit, reset } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await ContactService.sendContact(data);
      reset();
      navigate("/contact/success");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="w-full max-w-xl mt-10 lg:py-4 lg:px-4">
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            name="email"
            control={control}
            label="Correo electrónico"
            type="email"
            placeholder="name@example.com"
            icon={HiMail}
          />
          <TextareaField
            name="message"
            control={control}
            label="Mensaje"
            placeholder="Escribe tu mensaje aquí"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <CustomButton
            type="submit"
            color="royal-purple"
          >
            Enviar
          </CustomButton>
        </form>
      </Card>
    </div>
  );
};
