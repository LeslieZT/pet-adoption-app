import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useAuthStore } from "../../store/Auth.store";
import { formatRefCode } from "../../utils/formatFields";
import * as PetService from "../../services/pet.service";
import { ModalCustom } from "../Modal/ModalCustom";

interface MarkPetsAsFavoriteCardProps {
  id: number;
  name: string;
  imageUrl: string;
  isFavorite?: boolean;
  variant?: "small" | "medium" | "large";
}

export const MarkPetsAsFavoriteCard: React.FC<MarkPetsAsFavoriteCardProps> = ({
  id,
  name,
  imageUrl,
  isFavorite = false,
  variant = "small",
}) => {
  const { user, channel, credential } = useAuthStore((state) => state);
  const [favorite, setFavorite] = useState(isFavorite);
  const [openModal, setOpenModal] = useState(false);

  const style = {
    height: {
      small: "h-52",
      medium: "h-48 md:max-h-52",
      large: "h-full",
    },
    weight: {
      small: "w-52",
      medium: "w-full",
      large: "w-full",
    },
    rounded: {
      small: "rounded-xl",
      medium: "rounded-l-xl md:rounded-b-none md:rounded-t-xl",
      large: "rounded-3xl",
    },
  };

  const handleFavorite = async () => {
    if (!user?.id) {
      setOpenModal(true);
    } else {
      await PetService.markAsFavorite(credential!, channel, { petId: id, value: !favorite });
      setFavorite(!favorite);
    }
  };

  return (
    <>
      <ModalCustom
        open={openModal}
        setOpen={setOpenModal}
      />

      <div className={`relative ${style.height[variant]} ${style.weight[variant]}`}>
        <img
          className={`${style.rounded[variant]} w-full h-full`}
          src={imageUrl}
          alt={`${name}-${formatRefCode(id)}`}
        />
        <button
          onClick={() => handleFavorite()}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors  "
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
