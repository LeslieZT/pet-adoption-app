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
        title="Información General"
        icon="information"
      />
      <div className=" flex flex-wrap justify-between gap-2">
        <InformationTag
          name="Genero"
          value={gender === "male" ? "Macho" : "Hembra"}
          gender={gender}
        />
        <InformationTag
          name="Edad"
          value={age}
          gender={gender}
        />
        <InformationTag
          name="Raza"
          value={breed}
          gender={gender}
        />
        <InformationTag
          name="Peso"
          value={`${weight} Kg`}
          gender={gender}
        />
        <InformationTag
          name="Altura"
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
