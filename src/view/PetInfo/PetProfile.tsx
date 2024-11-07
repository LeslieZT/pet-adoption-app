import { Link } from "react-router-dom";
import { PiPawPrintFill } from "react-icons/pi";
import { FaSquareInstagram, FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { MarkPetsAsFavoriteCard } from "../../components/Card/MarkPetsAsFavoriteCard";
import {
  BehaviorTag,
  InformationTag,
  MapComponent,
  TitleSectionPetProfile,
} from "../../components/PetProfile";
import { Heading, Paragraph } from "../../components/Typography";
import { CustomButton } from "../../components/Buttons";
import { CustomButtonProps } from "../../components/Buttons/CustomButton";
import { PetCustomCard } from "../../components/Card";
import { PetInfo } from "../../types/PetInfo.type";

interface PetProfileProps {
  id: string;
}

const data: PetInfo = {
  id: "123",
  name: "Doggy",
  category: "Dog",
  referenceCode: "123",
  description: `A gentle soul who initially shies away from unfamiliar situations. Guinness is redefining what it means to be brave - For him, it means trying his very best to get to know new people from the comfort of his hiding space.
Guinness enjoys the finer things in life, like a gentle cuddle and the great outdoors. He’s an avid explorer and tends to enjoy spending most of his time outside. Once settled into his new home he will really benefit from access to the big wide world.
In his new home he’s looking for people who are able to give him plenty of structure and routine so he can feel safe and secure. Those who are patient enough to earn his trust will be rewarded with a very sweet and loving companion. His perfect new people will be able to let Guinness lead the way when it comes to building the friendship.
Guinness says, “Good things come to those who wait!”`,
  breed: "Bulldog",
  weight: "100",
  height: "100",
  color: "black",
  age: "1y, 2m",
  gender: "female",
  isFavorite: false,
  behavior: [
    {
      id: "1",
      label: "Playful",
    },
    {
      id: "2",
      label: "Loving",
    },
    {
      id: "3",
      label: "Friendly",
    },
  ],
  location: {
    address: "123 Main Street",
    shelterName: "Happy Paws",
    phone: "123-456-7890",
    latitud: 51.505,
    longitud: -0.09,
  },
  images: [
    {
      id: "1",
      url: "../src/assets/section1_cat.png",
    },
    {
      id: "2",
      url: "https://pet-adoption-app.s3.us-east-2.amazonaws.com/doggy.jpg",
    },
    {
      id: "3",
      url: "https://pet-adoption-app.s3.us-east-2.amazonaws.com/doggy.jpg",
    },
  ],
};

export const PetProfile: React.FC<PetProfileProps> = ({ id }) => {
  console.log(id);
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

  return (
    <div className="mt-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        <MarkPetsAsFavoriteCard
          refCode={data.referenceCode}
          name={data.name}
          imageUrl={data.images[0].url}
          isFavorite={data.isFavorite}
          variant="large"
        />
        <div className="flex flex-col justify-between gap-4">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <Heading
                level="2"
                color="slate-gray"
                className="font-bold text-2xl md:text-3xl"
              >
                Hello,{" "}
                <span className={`text-${profielColor[data.gender].primary}`}>I'm {data.name}</span>
              </Heading>

              <Heading
                level="5"
                color="slate-gray"
                className="font-normal text-sm md:text-lg"
              >
                Reference code:{" "}
                <span className={`text-${profielColor[data.gender].primary} font-bold`}>
                  {data.referenceCode}
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
            <Link to={`/adopt/${data.referenceCode}/application-form`}>
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
          <div className="h-auto space-y-4">
            <TitleSectionPetProfile
              title={`${data.name}'s information`}
              icon="information"
            />
            <div className=" flex flex-wrap justify-between gap-2">
              <InformationTag
                name="Gender"
                value={data.gender}
                gender={data.gender}
              />
              <InformationTag
                name="Age"
                value={data.age}
                gender={data.gender}
              />
              <InformationTag
                name="Breed"
                value={data.breed}
                gender={data.gender}
              />
              <InformationTag
                name="Weight"
                value={`${data.weight} Kg`}
                gender={data.gender}
              />
              <InformationTag
                name="Height"
                value={`${data.height} Cm`}
                gender={data.gender}
              />
              <InformationTag
                name="Color"
                value={data.color}
                gender={data.gender}
              />
            </div>
          </div>

          <div className="h-auto space-y-4">
            <TitleSectionPetProfile
              title={`${data.name} behavior`}
              icon="behavior"
            />
            <div className=" flex flex-wrap gap-2">
              {data.behavior.map((behavior) => (
                <BehaviorTag
                  key={behavior.id}
                  label={behavior.label}
                  gender={data.gender}
                />
              ))}
            </div>
          </div>

          <div className="h-auto space-y-4">
            <TitleSectionPetProfile
              title="Include in my care"
              icon="includeCare"
            />
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-slate-gray">
              <li>I've been vaccinated, microchipped, wormed and neutered as required</li>
              <li>Examined by a vet and treated if needed</li>
              <li>Assessed by an experienced member of our team</li>
              <li>Given an individual profile to help match me with my new owner</li>
              <li>Matched with our expert free insurance from Petplan</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <TitleSectionPetProfile
            title={`${data.name} location`}
            icon="location"
          />
          <div className="space-y-2">
            <Paragraph>
              <span className="font-semibold">Shelter name:</span> {data.location.shelterName}
            </Paragraph>
            <Paragraph>
              <span className="font-semibold">Address:</span> {data.location.address}
            </Paragraph>
            <Paragraph>
              <span className="font-semibold">Phone:</span> {data.location.phone}
            </Paragraph>
          </div>
          <MapComponent
            market={data.location.shelterName}
            position={[data.location.latitud, data.location.longitud]}
            gender={data.gender}
          />
        </div>
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
            src={data.images[0].url}
            alt={`${data.name}-${data.referenceCode}-adoption`}
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
