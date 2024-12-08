import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MainLayout } from "../layouts/Main.layout";
import { Heading, Paragraph, SubtitleApplication } from "../components/Typography";
import { AdoptionForm } from "../view/Adoption/AdoptionForm";
import { PetAdoptCard } from "../components/Card";
import * as PetService from "../services/pet.service";

import { PetInfo } from "../types/PetInfo.type";

const AdoptionApplicationPage: React.FC = () => {
  const { petId } = useParams<{ petId: string }>();
  const [data, setData] = useState<PetInfo>({} as PetInfo);

  useEffect(() => {
    if (petId) {
      const getPetInfo = async () => {
        const response = await PetService.getPetById(parseInt(petId));
        if (response.data) {
          setData(response.data);
        }
      };
      getPetInfo();
    }
  }, []);

  if (!petId) {
    return <div>No encontrado</div>;
  }

  return (
    <MainLayout>
      <Heading
        level="2"
        color="royal-purple"
        className="text-center font-medium mt-12"
      >
        ¡Has elegido a tu nuevo mejor amigo!
      </Heading>
      <Paragraph className="text-center mt-6">
        ¡Gracias por ofrecerle un hogar amoroso a una de nuestras mascotas rescatadas! Estás un paso
        más cerca de cambiar una vida. Esto es lo que sigue:
      </Paragraph>

      <div className="mt-10 grid md:grid-cols-3 md:grid-rows-auto gap-6 md:gap-10">
        <div className=" order-2 md:order-1 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-4">
          <SubtitleApplication
            title="1. Completa tu solicitud de adopción"
            paragraph="Llena un formulario rápido para proporcionarnos los detalles necesarios para finalizar la adopción."
          />
          <AdoptionForm petId={parseInt(petId)} />
        </div>
        <div className="order-1 md:order-2 md:col-start-3  md:col-end-4 md:row-start-1 md:row-end-3">
          <PetAdoptCard
            referenceCode={petId}
            name={data.name}
            breed={data.breed}
            age={data.age}
            gender={data.gender}
            weight={data.weight}
            height={data.height}
            color={data.color}
            imageUrl={data.profilePicture}
          />
        </div>
        <div className="order-3 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4 ">
          <Heading
            level="3"
            className="font-semibold mb-4"
          >
            Próximos pasos
          </Heading>
          <SubtitleApplication
            title="2. Conoce a tu nueva mascota"
            paragraph="Nuestro equipo se pondrá en contacto contigo para organizar una reunión con tu nuevo amigo peludo. ¡Esto asegura un emparejamiento perfecto!"
          />
          <SubtitleApplication
            title="3. Prepárate para su llegada"
            paragraph="Prepara tu hogar con lo básico: comida, platos de agua, una cama acogedora y juguetes para darle la bienvenida."
          />
          <SubtitleApplication
            title="4. Finaliza la adopción"
            paragraph="Una vez que todo esté listo, completaremos el papeleo y tu mascota estará lista para irse contigo a casa."
          />
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end mb-10 mt-4 w-full">
        <img
          src="../../src/assets/dog-icon2.png"
          alt="ícono de perro"
          className="h-32 w-40 md:h-36 md:w-44"
        />
      </div>
    </MainLayout>
  );
};

export default AdoptionApplicationPage;
