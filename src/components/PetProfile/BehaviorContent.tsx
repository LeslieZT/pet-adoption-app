import { BehaviorTag } from "../Tags";
import { TitleSectionPetProfile } from "../Typography";

interface PetBehaviorContentProps {
  name: string;
  gender: "male" | "female";
  behavior: string[];
}

export const PetBehaviorContent: React.FC<PetBehaviorContentProps> = ({
  name,
  gender,
  behavior,
}) => {
  return (
    <div className="h-auto space-y-4">
      <TitleSectionPetProfile
        title={`Comportamiento de ${name} `}
        icon="behavior"
      />
      <div className=" flex flex-wrap gap-2">
        {behavior.map((item, index) => (
          <BehaviorTag
            key={index}
            label={item}
            gender={gender}
          />
        ))}
      </div>
    </div>
  );
};
