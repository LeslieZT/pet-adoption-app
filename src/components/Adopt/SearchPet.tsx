import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiLocationMarker, HiSearch } from "react-icons/hi";
import { FaPaw, FaVenusMars } from "react-icons/fa";
import { ages, genders, petTypes } from "../../constants/allowValues";
import { InputField, SelectField } from "../Forms";
import { SearchFormData, SearchSchema } from "../../schema/Search.schema";
import { CustomButton } from "../Buttons";
import { PetCard } from "../Card/PetCard";

export const SearchPet: React.FC = () => {
  const { control, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      location: "",
      petType: "",
      gender: "",
      age: "",
    },
  });

  const onSubmit = (data: SearchFormData) => {
    console.log("Search data:", data);
  };

  return (
    <div className="flex flex-row md:flex-col gap-10 mt-10 p-4">
      <div className="w-80 md:w-full p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:flex-row md:items-end justify-center gap-4 "
        >
          <InputField
            name="location"
            control={control}
            label="Location"
            type="text"
            placeholder="Department, City, Address"
            icon={HiLocationMarker}
            className="w-auto md:w-96"
          />

          <SelectField
            control={control}
            name="petType"
            label="Categories"
            icon={FaPaw}
            options={petTypes}
            placeholder="Pet type"
          />

          <SelectField
            control={control}
            name="gender"
            label="Gender"
            icon={FaVenusMars}
            options={genders}
            placeholder="Gender"
          />

          <SelectField
            control={control}
            name="age"
            label="Age"
            icon={FaVenusMars}
            options={ages}
            placeholder="ages"
          />

          <CustomButton
            type="submit"
            color="royal-purple"
          >
            <HiSearch className="w-5 h-5 mr-2" />
            Search
          </CustomButton>
        </form>
      </div>

      <div className="w-full flex flex-wrap gap-4 justify-between">
        <PetCard
          name="Doggy"
          breed="Dog"
          age="2 years"
          location="New York"
       
          gender="male"
          imageUrl="./src/assets/Cat.png"
        />
        <PetCard
          name="Cat"
          breed="Cat"
          age="2 years"
          location="New York"
   
          gender="male"
          imageUrl="./src/assets/section1_pet6.png"
        />
        <PetCard
          name="Doggy"
          breed="Dog"
          age="2 years"
          location="New York"
 
          gender="female"
          imageUrl="./src/assets/Cat.png"
        />
        <PetCard
          name="Doggy"
          breed="Dog"
          age="2 years"
          location="New York"
     
          gender="male"
          imageUrl="./src/assets/Cat.png"
        />
        <PetCard
          name="Cat"
          breed="Cat"
          age="2 years"
          location="New York"
   
          gender="male"
          imageUrl="./src/assets/section1_pet6.png"
        />
        <PetCard
          name="Doggy"
          breed="Dog"
          age="2 years"
          location="New York"
       
          gender="female"
          imageUrl="./src/assets/Cat.png"
        />
      </div>
    </div>
  );
};
