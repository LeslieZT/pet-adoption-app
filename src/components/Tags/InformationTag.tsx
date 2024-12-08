import { twMerge } from "tailwind-merge";
import { Heading } from "../Typography";

interface InformationTagProps {
  name: string;
  value: string;
  gender: "male" | "female";
}

export const InformationTag: React.FC<InformationTagProps> = ({ name, value, gender }) => {
  const bgColor = gender === "male" ? "bg-aqua-blue-light" : "bg-vibrant-pink-light";
  const textColor = gender === "male" ? "aqua-blue" : "vibrant-pink";

  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center p-1 md:py-3 md:px-4 rounded-lg w-32 h-24 overflow-hidden", // Contenedor con ancho y altura fija
        bgColor,
      )}
    >
      <Heading
        level="6"
        className="font-medium text-center"
        color={textColor}
      >
        {name}
      </Heading>
      <Heading
        level="6"
        color="slate-gray"
        className=" text-center"
        style={{
          fontSize: "clamp(0.3rem, 1rem, 0.9rem)", // Ajusta el tamaño de la fuente con un rango dinámico
        }}
      >
        {value}
      </Heading>
    </div>
  );
};
