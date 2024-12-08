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
        title={`Donde se encuentra ${name}`}
        icon="location"
      />
      <div className="space-y-2">
        <Paragraph>
          <span className="font-semibold">Nombre de Albergue:</span> {location.name}
        </Paragraph>
        <Paragraph>
          <span className="font-semibold">Direccion:</span> {location.address}
        </Paragraph>
        <Paragraph>
          <span className="font-semibold">Phone:</span> {location.phone}
        </Paragraph>
        <Paragraph>
          <span className="font-semibold">Email:</span> {location.email}
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
