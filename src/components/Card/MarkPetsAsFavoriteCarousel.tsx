import { useState } from "react";
import { Carousel } from "flowbite-react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useAuthStore } from "../../store/Auth.store";
import { formatRefCode } from "../../utils/formatFields";
import * as PetService from "../../services/pet.service";
import { ModalCustom } from "../Modal/ModalCustom";

interface MarkPetsAsFavoriteCarouselProps {
  id: number;
  name: string;
  photos: string[];
  isFavorite?: boolean;
}

export const MarkPetsAsFavoriteCarousel: React.FC<MarkPetsAsFavoriteCarouselProps> = ({
  id,
  name,
  photos,
  isFavorite = false,
}) => {
  const { user, channel, credential } = useAuthStore((state) => state);
  const [favorite, setFavorite] = useState(isFavorite);
  const [openModal, setOpenModal] = useState(false);

  const handleFavorite = async () => {
    if (!user?.id) {
      setOpenModal(true);
    } else {
      await PetService.markAsFavorite(credential!, channel, { petId: id, value: !favorite });
      setFavorite(!favorite);
    }
  };

  const bgImage =
    "https://res.cloudinary.com/dyntsz5qv/image/upload/v1733686320/wallpaper-profile_gduapk.png";
  //

  return (
    <>
      <ModalCustom
        open={openModal}
        setOpen={setOpenModal}
      />
      <div
        className={`relative w-full h-96 md:h-full md:min-h-[35rem] md:mx-h-[42rem] rounded-3xl `}
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <Carousel
          slideInterval={2000}
          className="carousel-custom"
        >
          {photos.map((photo, index) => (
            <img
              key={index}
              className={`w-[30rem] h-full `}
              src={photo}
              alt={`${name}-${formatRefCode(id)}-${index}`}
            />
          ))}
        </Carousel>

        <button
          onClick={() => handleFavorite()}
          className="absolute top-3 right-3 p-2 rounded-full border-royal-purple border-2 bg-gray-100 backdrop-blur-sm hover:bg-white transition-colors  "
        >
          {favorite ? (
            <GoHeartFill className="w-5 h-5 text-royal-purple" />
          ) : (
            <GoHeart className="w-5 h-5 text-royal-purple" />
          )}
        </button>
      </div>
    </>
  );
};
