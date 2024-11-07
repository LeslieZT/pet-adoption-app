import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface MarkPetsAsFavoriteCardProps {
  refCode: string;
  name: string;
  imageUrl: string;
  isFavorite?: boolean;
  variant?: "small" | "medium" | "large";
}

export const MarkPetsAsFavoriteCard: React.FC<MarkPetsAsFavoriteCardProps> = ({
  refCode,
  name,
  imageUrl,
  isFavorite = false,
  variant = "small",
}) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const style = {
    height: {
      small: "h-64",
      medium: "h-auto",
      large: "h-full",
    },
    rounded: {
      small: "rounded-t-xl",
      medium: "rounded-2xl",
      large: "rounded-3xl",
    },
  };

  return (
    <div className={`relative ${style.height[variant]}`}>
      <img
        className={`${style.rounded[variant]} w-full h-full object-cover`}
        src={imageUrl}
        alt={`${name}-${refCode}`}
      />
      <button
        onClick={() => setFavorite(!favorite)}
        className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
      >
        {favorite ? (
          <GoHeartFill className="w-5 h-5 text-royal-purple" />
        ) : (
          <GoHeart className="w-5 h-5 text-royal-purple" />
        )}
      </button>
    </div>
  );
};
