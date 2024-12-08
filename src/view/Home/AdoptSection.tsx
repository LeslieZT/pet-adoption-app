import { Carousel } from "flowbite-react";
import { AdoptCard } from "../../components/Card";
import { Paragraph, SubTitle } from "../../components/Typography";

export const AdoptSection: React.FC = () => {
  return (
    <section className="py-6 md:py-20 grid lg:grid-cols-2 gap-6 md:gap-10 xl:gap-20">
      <div className="min-h-80 h-full order-last lg:order-first ">
        <Carousel
          pauseOnHover
          className="h-full"
        >
          <img
            src="https://res.cloudinary.com/dyntsz5qv/image/upload/v1733582100/adopt_dfse38.png"
            alt="carousel-1"
            className="rounded-lg w-full  min-h-60 h-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/dyntsz5qv/image/upload/v1733588086/view-cats-dogs-being-friends_fkxzqm.jpg"
            alt="carousel-2"
            className="rounded-lg w-full  min-h-60 h-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/dyntsz5qv/image/upload/v1733590126/rabbit_uiosvw.png"
            alt="carousel-3"
            className="rounded-lg w-full  min-h-60 h-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/dyntsz5qv/image/upload/v1733588985/hamster_quwq5p.png"
            alt="carousel-4"
            className="rounded-lg w-full  min-h-60 h-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/dyntsz5qv/image/upload/v1733589846/dog-person_nkbdkx.png"
            alt="carousel-5"
            className="rounded-lg w-full  min-h-60 h-full object-cover"
          />
        </Carousel>
      </div>

      <div className="flex flex-col items-start justify-center gap-6 md:gap-8">
        <SubTitle className="text-justify md:text-left">Cómo Adoptar a Tu Nuevo Amigo</SubTitle>
        <Paragraph className="text-justify">
          ¿Estas listo para llevar a casa a tu nuevo mejor amigo? Explora, conoce, adopta y comienza
          hoy mismo tu viaje lleno de amor y alegría.
        </Paragraph>
        <div className="grid md:grid-cols-2 gap-4 m-auto">
          <AdoptCard
            icon="findPet"
            title="1. Encuentra a tu Mascota Ideal"
            description="Explora nuestro sitio web y encuentra a la mascota perfecta que robe tu corazón."
          />
          <AdoptCard
            icon="application"
            title="2. Completa la Solicitud"
            description="Llena la solicitud de adopción."
          />
          <AdoptCard
            icon="contact"
            title="3. Conoce a tu Futuro Amigo"
            description="Nuestro equipo se pondrá en contacto contigo para organizar un encuentro con tu nuevo amigo peludo. ¡Así aseguramos que sea una combinación perfecta!"
          />
          <AdoptCard
            icon="takeThemHome"
            title="4. Prepárate para Su Llegada"
            description="Prepara tu hogar con lo básico: comida, platos para agua, una cama cómoda y juguetes para dar la bienvenida a tu mascota."
          />
          <AdoptCard
            icon="paperwork"
            title="5. Finaliza la Adopción"
            description="Cuando todo esté listo, completaremos el papeleo y tu mascota estará lista para irse a casa contigo."
          />
          <div className="hidden md:flex items-end justify-end">
            <img
              src="https://res.cloudinary.com/dyntsz5qv/image/upload/v1733582100/cat-icon2_uvbpic.png"
              alt="icono-gato"
              className="h-26 w-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
