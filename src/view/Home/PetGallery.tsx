import { twMerge } from "tailwind-merge";

interface PetGalleryProps {
  className?: string;
}

export const PetGallery: React.FC<PetGalleryProps> = ({ className = "" }) => {
  const pets = [
    "https://res.cloudinary.com/dyntsz5qv/image/upload/v1733582103/section1_cat_jwxn0v.png",
    "https://res.cloudinary.com/dyntsz5qv/image/upload/v1733589754/dog_dt8kyd.png",
    "https://res.cloudinary.com/dyntsz5qv/image/upload/v1733582104/section1_hamster_nokdmr.jpg",
    "https://res.cloudinary.com/dyntsz5qv/image/upload/v1733590369/rabbit-image_u0kite.png",
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
