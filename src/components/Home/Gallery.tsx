import { twMerge } from "tailwind-merge";

interface GalleryProps {
  className?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ className = "" }) => {
  const pets = [
    "./src/assets/section1_pet1.png",
    "./src/assets/section1_pet2.png",
    "./src/assets/section1_pet3.png",
    "./src/assets/section1_pet4.png",
  ];

  return (
    <div className={twMerge("grid grid-cols-2 gap-4", className)}>
      {pets.map((pet, index) => (
        <img
          key={index}
          src={pet}
          alt={`pet-${index}`}
          className="object-cover rounded-lg w-full h-40 md:h-60 lg:h-72 xl:h-80 transition-transform duration-300 ease-in-out transform hover:scale-105"
        />     
      ))}
    </div>
  );
};
