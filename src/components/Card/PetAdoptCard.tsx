import { Card } from "flowbite-react";
import { PetInfoContent } from "../PetProfile";
import { Heading } from "../Typography";

interface PetAdoptCardProps {
  referenceCode: string;
  name: string;
  breed: string;
  age: string;
  gender: "male" | "female";
  weight: string;
  height: string;
  color: string;
  imageUrl: string;
}

export const PetAdoptCard: React.FC<PetAdoptCardProps> = ({
  referenceCode,
  name,
  breed,
  age,
  gender,
  weight,
  height,
  color,
  imageUrl,
}) => {
  const profielColor = gender === "male" ? "aqua-blue" : "vibrant-pink";

  return (
    <Card className="">
      <img
        className={`w-full h-52 md:h-80 object-cover`}
        src={imageUrl}
        alt={`${name}-${referenceCode}`}
      />
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <Heading
          level="3"
          color="slate-gray"
          className="font-bold"
        >
          Hello, <span className={`text-${profielColor}`}>I'm {name}</span>
        </Heading>

        <Heading
          level="5"
          color="slate-gray"
          className="font-normal text-sm md:text-base"
        >
          Reference code: <span className={`text-${profielColor} font-bold`}>{referenceCode}</span>
        </Heading>
      </div>
      <PetInfoContent
        name={name}
        gender={gender}
        age={age}
        breed={breed}
        weight={weight}
        height={height}
        color={color}
      />
    </Card>
  );
};
