import { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";
import { PetCard } from "../../components/Card";
import { Heading } from "../../components/Typography";
import { useAuthStore } from "../../store/Auth.store";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import * as PetService from "../../services/pet.service";
import { PetBreed, PetResult } from "../../types/Pet";
import { formatAge } from "../../utils/formatFields";
import { LIMIT_PAGE } from "../../constants/api";

export const FavoritePetsSection: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const { credential, channel } = useAuthStore((state) => state);
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1);
  const [breeds, setBreeds] = useState<Record<string, PetBreed>>({});
  const [pets, setPets] = useState<PetResult[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const getBreeds = async () => {
    const { data: result } = await PetService.getPetBreeds();
    if (result) {
      setBreeds(result);
    }
  };

  const getPets = async () => {
    const { data: result } = await PetService.getFavoritePets(credential!, channel, {
      page: currentPage,
      limit: LIMIT_PAGE,
    });

    if (result) {
      const totalPages = Math.ceil(result.total / LIMIT_PAGE);
      setTotalPages(totalPages);
      setPets(result.data);
    }
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`?page=${page}`);
  };

  useEffect(() => {
    getBreeds();
    getPets();
  }, []);

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
            imageUrl={pet.profilePicture}
            isFavorite={pet.isFavorite}
          />
        ))}
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
    </div>
  );
};
