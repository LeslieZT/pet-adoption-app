import { PetCard } from "../../components/Card";
import { Heading } from "../../components/Typography";

export const FavoritePetsSection: React.FC = () => {
  return (
    <div className="h-full">
      <Heading
        level="3"
        color="royal-purple"
        className="font-bold mb-4"
      >
        My favorite pets
      </Heading>
      <div className="w-full flex flex-wrap gap-4 justify-around">
        <PetCard
          refCode="123"
          name="Doggy"
          breed="Dog"
          age="2 years"
          location="New York"
          gender="male"
          imageUrl="./src/assets/Cat.png"
          isFavorite={true}
        />
        <PetCard
          refCode="123"
          name="Cat"
          breed="Cat"
          age="2 years"
          location="New York"
          gender="male"
          imageUrl="./src/assets/section1_rabbit.png"
          isFavorite={true}
        />
        <PetCard
          refCode="123"
          name="Doggy"
          breed="Dog"
          age="2 years"
          location="New York"
          gender="female"
          imageUrl="./src/assets/Cat.png"
          isFavorite={true}
        />
        <PetCard
          refCode="123"
          name="Doggy"
          breed="Dog"
          age="2 years"
          location="New York"
          gender="male"
          imageUrl="./src/assets/Cat.png"
          isFavorite={true}
        />
        <PetCard
          refCode="123"
          name="Cat"
          breed="Cat"
          age="2 years"
          location="New York"
          gender="male"
          imageUrl="./src/assets/section1_rabbit.png"
          isFavorite={true}
        />
        <PetCard
          refCode="123"
          name="Doggy"
          breed="Dog"
          age="2 years"
          location="New York"
          gender="female"
          imageUrl="./src/assets/Cat.png"
          isFavorite={true}
        />
      </div>
    </div>
  );
};
