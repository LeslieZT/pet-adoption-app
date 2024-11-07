import { InformationTag } from "../Tags";
import { TitleSectionPetProfile } from "../Typography";

interface PetInfoContentProps {
  name: string;
  gender: "male" | "female";
  age: string;
  breed: string;
  weight: string;
  height: string;
  color: string;
}

export const PetInfoContent: React.FC<PetInfoContentProps> = ({
  name,
  gender,
  age,
  breed,
  weight,
  height,
  color,
}) => {
  return (
    <div className="h-auto space-y-4">
      <TitleSectionPetProfile
        title={`${name}'s information`}
        icon="information"
      />
      <div className=" flex flex-wrap justify-between gap-2">
        <InformationTag
          name="Gender"
          value={gender}
          gender={gender}
        />
        <InformationTag
          name="Age"
          value={age}
          gender={gender}
        />
        <InformationTag
          name="Breed"
          value={breed}
          gender={gender}
        />
        <InformationTag
          name="Weight"
          value={`${weight} Kg`}
          gender={gender}
        />
        <InformationTag
          name="Height"
          value={`${height} Cm`}
          gender={gender}
        />
        <InformationTag
          name="Color"
          value={color}
          gender={gender}
        />
      </div>
    </div>
  );
};
