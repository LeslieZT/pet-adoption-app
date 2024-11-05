import { twMerge } from "tailwind-merge";

interface PetGalleryProps {
  className?: string;
}

export const PetGallery: React.FC<PetGalleryProps> = ({ className = "" }) => {
  const pets = [
    "./src/assets/section1_dog.png",
    "./src/assets/section1_cat.png",
    "./src/assets/section1_hamster.jpg",
    "./src/assets/section1_rabbit.png",
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
