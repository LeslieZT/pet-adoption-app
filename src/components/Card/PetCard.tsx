import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoMdFemale, IoMdMale } from "react-icons/io";

import { useState } from "react";
import { Heading, Paragraph } from "../Typography";

interface PetCardProps {
  name: string;
  breed: string;
  age: string;
  location: string;
  gender: "male" | "female";
  imageUrl: string;
  isFavorite?: boolean;
}

const genderColors = {
  male: "bg-blue-100 text-blue-800",
  female: "bg-vibrant-pink-light text-vibrant-pink",
};

const genderIcons = {
  male: IoMdMale,
  female: IoMdFemale,
};

export const PetCard: React.FC<PetCardProps> = ({
  name,
  breed,
  age,
  location,
  gender,
  imageUrl,
  isFavorite,
}) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const Icon = genderIcons[gender];

  return (
    <div className="w-52 md:w-56 shadow-md rounded-xl">
      <div className="relative">
        <img
          className="rounded-t-xl w-full h-64 object-cover"
          src={imageUrl}
          alt={`${name} - ${breed}`}
        />
        <button
          onClick={() => setFavorite(!favorite)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        >
          {favorite ? (
            <GoHeartFill className="w-5 h-5 text-royal-purple" />
          ) : (
            <GoHeart className="w-5 h-5 text-royal-purple" />
          )}
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Heading level="5" color="royal-purple" className="font-bold dark:text-white">{name}</Heading>
          <span className={`text-lg p-2 rounded-full ${genderColors[gender]}`}>
            <Icon className="w-5 h-5" />
          </span>
        </div>

        <div className="space-y-2">
          
          <Paragraph size="small"> {breed} </Paragraph>
          <Paragraph size="small"> {age} </Paragraph>
          <Paragraph size="small"> {location} </Paragraph>

          
        </div>
      </div>
    </div>
  );
};
