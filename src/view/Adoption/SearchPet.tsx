import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Label, Pagination, TextInput } from "flowbite-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiLocationMarker, HiSearch } from "react-icons/hi";
import { FaPaw, FaVenusMars } from "react-icons/fa";
import { SelectField } from "../../components/Forms";
import { CustomButton } from "../../components/Buttons";
import { PetCard } from "../../components/Card";
import { SearchFormData, SearchSchema } from "../../schema/Search.schema";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SearchLocationResponse } from "../../types/Shelter.type";
import { FindAllRequest, PetBreed, PetCategory, PetResult } from "../../types/Pet";
import * as ShelterService from "../../services/shelter.service";
import * as PetService from "../../services/pet.service";
import { PET_GENDERS, PET_AGES } from "../../constants/allowValues";
import { LIMIT_PAGE } from "../../constants/api";
import { useAuthStore } from "../../store/Auth.store";
import { formatAge } from "../../utils/formatFields";

export const SearchPet: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const { user } = useAuthStore((state) => state);
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1);
  const [suggestions, setSuggestions] = useState<SearchLocationResponse[]>([]);
  const [categories, setCategories] = useState<PetCategory[]>([]);
  const [breeds, setBreeds] = useState<Record<string, PetBreed>>({});
  const [pets, setPets] = useState<PetResult[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      location: undefined,
      petType: undefined,
      gender: undefined,
      option: undefined,
      age: undefined,
      page: currentPage,
      limit: LIMIT_PAGE,
    },
  });

  const getSuggestions = async (input: string): Promise<SearchLocationResponse[]> => {
    try {
      const response = await ShelterService.searchLocation({ search: input });
      if (!response.data) {
        return [];
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const getPets = async (filters: FindAllRequest) => {
    const { data: result } = await PetService.findAllPets(filters);

    if (result) {
      const totalPages = Math.ceil(result.total / LIMIT_PAGE);
      setTotalPages(totalPages);
      setPets(result.data);
    }
  };

  const getBreeds = async () => {
    const { data: result } = await PetService.getPetBreeds();
    if (result) {
      setBreeds(result);
    }
  };

  const getCategories = async () => {
    const { data: result } = await PetService.getPetCategories();
    if (result) {
      setCategories(result);
    }
  };

  const handleInputChange = async (value: string, onChange: (value: string) => void) => {
    onChange(value);
    if (value.length > 3) {
      const suggestions = await getSuggestions(value);
      setSuggestions(suggestions);
    } else {
      setSuggestions([]);
    }
    setValue("option", undefined);
  };

  const onSubmit = async (data: SearchFormData) => {
    const filters: FindAllRequest = {
      idUser: user?.id,
      limit: LIMIT_PAGE,
      page: data.page,
    };

    if ((data.location && data.option) || (!data.location && data.option)) {
      filters.option = data.option;
    } else if (data.location) {
      filters.location = data.location;
    }

    if (data.petType) {
      filters.petType = parseInt(data.petType);
    }

    if (data.gender) {
      filters.gender = data.gender;
    }

    if (data.age) {
      const ageFilter = JSON.parse(data.age);
      filters.age = {
        minAge: ageFilter.minAge,
        maxAge: ageFilter.maxAge,
      };
    }
    console.log("Filters:", filters);
    getPets(filters);
  };

  const onPageChange = (page: number) => {
    setValue("page", page);
    setCurrentPage(page);
    navigate(`?page=${page}`);
    handleSubmit(onSubmit)();
  };

  useEffect(() => {
    getCategories();
    getBreeds();
    getPets({ limit: LIMIT_PAGE, idUser: user?.id, page: currentPage });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-2 mt-4">
        <div className="w-full p-4 ">
          <span>{JSON.stringify(errors)}</span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row md:items-end justify-center gap-4 "
          >
            <div className="relative w-full md:w-96">
              <Label
                htmlFor="location"
                value="Location"
                className="text-slate-gray font-semibold mb-2 block"
              />
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <TextInput
                      {...field}
                      icon={HiLocationMarker}
                      id="location"
                      type="text"
                      placeholder="Where are you finding a friend?"
                      onChange={(e) => handleInputChange(e.target.value, field.onChange)}
                    />
                  </div>
                )}
              />
              {suggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  {suggestions.map((suggestion) => (
                    <button
                      key={`${suggestion.placeId}-${suggestion.placeLevel}`}
                      type="button"
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      onClick={() => {
                        setValue("location", suggestion.fullLocation);
                        setValue("option", suggestion);
                        setSuggestions([]);
                      }}
                    >
                      {suggestion.fullLocation}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <SelectField
              control={control}
              name="petType"
              label="Categories"
              icon={FaPaw}
              options={categories}
              placeholder="Pet type"
            />
            <div className="gap-4 grid grid-cols-2">
              <SelectField
                control={control}
                name="gender"
                label="Gender"
                icon={FaVenusMars}
                options={PET_GENDERS}
                placeholder="Gender"
              />

              <SelectField
                control={control}
                name="age"
                label="Age"
                icon={FaVenusMars}
                options={PET_AGES}
                placeholder="ages"
              />
            </div>

            <CustomButton
              type="submit"
              color="royal-purple"
            >
              <HiSearch className="w-5 h-5 mr-2" />
              Search
            </CustomButton>
          </form>
        </div>
        <div className="w-full flex flex-wrap gap-4 justify-around">
          {pets.map((pet) => (
            <PetCard
              key={pet.petId}
              id={pet.petId}
              name={pet.name}
              breed={breeds[pet.breedId.toString()]?.name}
              age={formatAge(parseInt(pet.totalMonths))}
              shelterName={pet.shelterName}
              location={pet.address}
              gender={pet.gender as "male" | "female"}
              imageUrl={
                "https://res.cloudinary.com/dyntsz5qv/image/upload/v1731002111/tsjzsokbmwphu3uveuqp.png"
              }
              isFavorite={pet.isFavorite}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
          layout={isMobile ? "table" : "pagination"}
        />
      </div>
    </>
  );
};
