import React from "react";
import { SubTitle, Paragraph } from "../../components/Typography";
import { DonateCard } from "../../components/Card";

export const DonateSection: React.FC = () => {
  return (
    <section className="py-6 md:py-20 flex flex-col items-center justify-center gap-6 md:gap-8">
      <SubTitle className="text-justify md:text-left">Dona y Salva Vidas</SubTitle>
      <Paragraph className="text-center max-w-3xl">
        Tu donación puede marcar la diferencia y salvar vidas. Únete a nuestra misión de rescatar,
        cuidar y encontrar hogares para mascotas necesitadas contribuyendo hoy.
      </Paragraph>

      <div className="grid md:grid-cols-3 gap-4 md:mt-20">
        <DonateCard
          title="Donación Única"
          description="Haz una donación única para apoyar nuestros esfuerzos continuos en el rescate y cuidado de mascotas necesitadas."
          icon="oneTime"
        />

        <DonateCard
          title="Compromiso Mensual"
          description="Conviértete en un donante mensual y brinda apoyo constante para ayudarnos a salvar más vidas cada mes."
          icon="monthly"
          variant="dark"
          className="md:translate-y-[-30px]"
        />

        <DonateCard
          title="Apadrina una Mascota"
          description="Apadrina una mascota bajo nuestro cuidado y contribuye directamente a sus necesidades hasta que encuentre un hogar definitivo."
          icon="sponsor"
        />
      </div>
      <img
        src="https://res.cloudinary.com/dyntsz5qv/image/upload/v1733582100/Dog_qv42ce.svg"
        alt="icono-perro"
      />
    </section>
  );
};
