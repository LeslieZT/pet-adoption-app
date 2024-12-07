import { ShelterLocation } from "../../types/PetInfo.type";
import { Paragraph } from "../Typography";
import { MapComponent } from "../Map/MapComponent";
import { TitleSectionPetProfile } from "../Typography";

interface PetLocationContentProps {
  name: string;
  gender: "male" | "female";
  location: ShelterLocation;
}

export const PetLocationContent: React.FC<PetLocationContentProps> = ({
  name,
  location,
  gender,
}) => {
  return (
    <div className="space-y-4">
      <TitleSectionPetProfile
        title={`${name} location`}
        icon="location"
      />
      <div className="space-y-2">
        <Paragraph>
          <span className="font-semibold">Shelter name:</span> {location.name}
        </Paragraph>
        <Paragraph>
          <span className="font-semibold">Address:</span> {location.address}
        </Paragraph>
        <Paragraph>
          <span className="font-semibold">Phone:</span> {location.phone}
        </Paragraph>
      </div>
      <MapComponent
        market={location.name}
        position={[parseFloat(location.latitude), parseFloat(location.longitude)]}
        gender={gender}
      />
    </div>
  );
};
