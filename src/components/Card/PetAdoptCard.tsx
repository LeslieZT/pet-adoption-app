import { Card } from "flowbite-react";
import { PetInfoContent } from "../PetProfile";
import { Heading } from "../Typography";
import { Link } from "react-router-dom";

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
  const profileColor = gender === "male" ? "aqua-blue" : "vibrant-pink";

  return (
    <Card className="">
      <Link to={`/adopt/${referenceCode}`}>
        <img
          className={`w-full h-52 md:h-80 object-cover`}
          src={imageUrl}
          alt={`${name}-${referenceCode}`}
        />
      </Link>

      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <Heading
          level="3"
          color="slate-gray"
          className="font-bold"
        >
          <span className={`text-${profileColor}`}>{name}</span>
        </Heading>

        <Heading
          level="5"
          color="slate-gray"
          className="font-normal text-sm md:text-base"
        >
          Código Referencia:{" "}
          <span className={`text-${profileColor} font-bold`}>{referenceCode}</span>
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
