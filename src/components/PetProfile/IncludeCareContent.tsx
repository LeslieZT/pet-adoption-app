import { TitleSectionPetProfile } from "../Typography";

export const IncludeCareContent: React.FC = () => {
  return (
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
  );
};
