import { TitleSectionPetProfile } from "../Typography";

export const IncludeCareContent: React.FC = () => {
  return (
    <div className="h-auto space-y-4">
      <TitleSectionPetProfile
        title="Incluir en mi cuidado"
        icon="includeCare"
      />
      <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-slate-gray">
        <li>Vacunación y desparacitación al día</li>
        <li>Examen veterinario completo y tratamiento necesario</li>
        <li>Alimentación adecuada según mis necesidades</li>
        <li>Cuidado personalizado para adaptarme a mi nuevo hogar</li>
        <li>Seguro de salud especializado para mascotas</li>
      </ul>
    </div>
  );
};
