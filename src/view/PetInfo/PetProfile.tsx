import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PiPawPrintFill } from "react-icons/pi";
import { FaSquareInstagram, FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { Heading, Paragraph } from "../../components/Typography";
import { CustomButton } from "../../components/Buttons";
import { CustomButtonProps } from "../../components/Buttons/CustomButton";
import { PetCustomCard } from "../../components/Card";
import { PetInfo } from "../../types/PetInfo.type";
import { MarkPetsAsFavoriteCard } from "../../components/Card/MarkPetsAsFavoriteCard";
import {
  IncludeCareContent,
  PetBehaviorContent,
  PetInfoContent,
  PetLocationContent,
  TitleSectionPetProfile,
} from "../../components/PetProfile";
import { useAuthStore } from "../../store/Auth.store";
import * as PetService from "../../services/pet.service";
import { formatRefCode } from "../../utils/formatFields";
import { Spinner } from "flowbite-react";

interface PetProfileProps {
  id: string;
}

export const PetProfile: React.FC<PetProfileProps> = ({ id }) => {
  const { user } = useAuthStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<PetInfo>({
    petId: 0,
    name: "",
    description: "",
    birthdate: new Date(),
    age: "",
    weight: "",
    height: "",
    gender: "male",
    color: "",
    behavior: [],
    profilePicture: "",
    breed: "",
    shelter: {
      name: "",
      address: "",
      phone: "",
      latitude: "",
      longitude: "",
      email: "",
      district: "",
      province: "",
      department: "",
    },
    photos: [],
    isFavorite: false,
    applications: 0,
  });

  const profielColor = {
    female: {
      primary: "vibrant-pink",
      secondary: "light-vibrant-pink",
    },
    male: {
      primary: "aqua-blue",
      secondary: "light-aqua-blue",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    const getPetInfo = async () => {
      const response = await PetService.getPetById(parseInt(id), user?.id);
      if (response.data) {
        setData(response.data);
        setIsLoading(false);
      }
    };
    getPetInfo();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {isLoading && (
          <Spinner
            color="purple"
            aria-label="Purple spinner example"
            className="h-52 w-52"
          />
        )}
      </div>
    );
  }

  return (
    <div className="my-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        <MarkPetsAsFavoriteCard
          id={data.petId}
          name={data.name}
          imageUrl={
            "https://res.cloudinary.com/dyntsz5qv/image/upload/v1731002111/tsjzsokbmwphu3uveuqp.png"
          }
          isFavorite={data.isFavorite}
          variant="large"
        />
        <div className="flex flex-col justify-between gap-4">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <Heading
                level="2"
                color="slate-gray"
                className="font-bold"
              >
                Hello,{" "}
                <span className={`text-${profielColor[data.gender as "female" | "male"].primary}`}>
                  I'm {data.name}
                </span>
              </Heading>

              <Heading
                level="5"
                color="slate-gray"
                className="font-normal text-sm md:text-lg"
              >
                Reference code:{" "}
                <span
                  className={`text-${profielColor[data.gender as "female" | "male"].primary} font-bold`}
                >
                  {formatRefCode(data.petId)}
                </span>
              </Heading>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <TitleSectionPetProfile
                title="About me"
                icon="about"
              />
              <Paragraph
                color="primary"
                className="text-justify"
                size="medium"
              >
                {data.description}
              </Paragraph>
            </div>
          </div>

          <div className="flex items-center  justify-center md:justify-end gap-4">
            <Link to={`/adopt/${formatRefCode(data.petId)}/application-form`}>
              <CustomButton
                color={profielColor[data.gender].primary as CustomButtonProps["color"]}
                className="py-1 md:py-2"
              >
                Adopt me
                <PiPawPrintFill className="ml-2 h-5 w-5" />
              </CustomButton>
            </Link>

            <Link to="/donate">
              <CustomButton
                color={profielColor[data.gender].secondary as CustomButtonProps["color"]}
                className="py-1 md:py-2"
              >
                Donate Now
                <PiPawPrintFill className="ml-2 h-5 w-5" />
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-6 md:mt-10">
        <div className="space-y-6">
          <PetInfoContent
            name={data.name}
            gender={data.gender}
            age={data.age}
            breed={data.breed}
            weight={data.weight}
            height={data.height}
            color={data.color}
          />

          <PetBehaviorContent
            name={data.name}
            gender={data.gender}
            behavior={data.behavior}
          />

          <IncludeCareContent />
        </div>

        <PetLocationContent
          name={data.name}
          gender={data.gender}
          location={data.shelter}
        />
      </section>

      <section className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-10 gap-2">
        <Heading
          level="3"
          className="font-semibold"
        >{`Help ${data.name} find a home by sharing this page with friends and family`}</Heading>
        <div className="flex items-center justify-center gap-4 text-royal-purple text-3xl">
          <FaSquareInstagram />
          <FaSquareFacebook />
          <FaSquareTwitter />
        </div>
      </section>

      <section className="flex flex-wrap gap-4 justify-center mt-6 md:mt-10 ">
        <PetCustomCard
          icon="adopt"
          title={`Give ${data.name} a forever home `}
          description="All our homeless pets want is a loving family to become part of. If you’re looking for a new pet, why not consider adopting from us?"
          gender={data.gender}
        />
        <div className="min-w-[16rem] md:max-w-[30rem]">
          <img
            className="w-ful h-full object-cover rounded-lg shadow-md"
            src={
              "https://res.cloudinary.com/dyntsz5qv/image/upload/v1731002111/tsjzsokbmwphu3uveuqp.png"
            }
            alt={`${data.name}-${formatRefCode(data.petId)}-adoption`}
          />
        </div>

        <PetCustomCard
          icon="donate"
          title={`Donate to help pets like ${data.name}`}
          description="By donating to HappyPaws, you’ll help homeless animals find loving homes. Why not give a gift that will change a life?"
          gender={data.gender}
          variant="dark"
        />
      </section>
    </div>
  );
};
