import { Link } from "react-router-dom";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiPawPrintFill } from "react-icons/pi";
import { Heading, Paragraph } from "../Typography";
import { MarkPetsAsFavoriteCard } from "./MarkPetsAsFavoriteCard";

interface PetCardProps {
  refCode: string;
  name: string;
  breed: string;
  age: string;
  location: string;
  gender: "male" | "female";
  imageUrl: string;
  isFavorite?: boolean;
}

const genderColors = {
  male: "bg-aqua-blue-light text-aqua-blue",
  female: "bg-vibrant-pink-light text-vibrant-pink",
};

const iconColors = {
  male: "text-aqua-blue",
  female: "text-vibrant-pink",
};

const genderIcons = {
  male: IoMdMale,
  female: IoMdFemale,
};

export const PetCard: React.FC<PetCardProps> = ({
  refCode,
  name,
  breed,
  age,
  location,
  gender,
  imageUrl,
  isFavorite,
}) => {
  const Icon = genderIcons[gender];

  return (
    <div className="w-full sm:max-w-80 md:max-w-56 shadow-md rounded-xl grid md:grid-cols-1 grid-cols-2 gap-2">
      <MarkPetsAsFavoriteCard
        refCode={refCode}
        name={name}
        imageUrl={imageUrl}
        isFavorite={isFavorite}
        variant="medium"
      />
      <Link to={`/adopt/${refCode}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Heading
              level="5"
              color="royal-purple"
              className="font-bold dark:text-white"
            >
              {name}
            </Heading>
            <span className={`text-lg p-2 rounded-full ${genderColors[gender]}`}>
              <Icon className="w-5 h-5" />
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <PiPawPrintFill className={`w-5 h-5 ${iconColors[gender]}`} />
              <Paragraph
                size="small"
                className="w-[90%]"
              >
                {breed}
              </Paragraph>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineAccessTimeFilled className={`w-5 h-5 ${iconColors[gender]}`} />

              <Paragraph
                size="small"
                className="w-[90%]"
              >
                {age}
              </Paragraph>
            </div>

            <div className="flex items-center gap-2">
              <FaLocationDot className={`w-5 h-5 ${iconColors[gender]}`} />
              <Paragraph
                size="small"
                className="w-[90%]"
              >
                {location}
              </Paragraph>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
