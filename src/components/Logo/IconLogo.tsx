import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export interface IconLogoProps {
  size?: "small" | "large";
  className?: string;
}

const IconLogoVariants = cva("dark:text-white", {
  variants: {
    size: {
      small: "w-8 h-8",
      large: "w-11 h-11",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export const IconLogo: React.FC<IconLogoProps> = ({ size, className = "" }) => {
  return (
    <img
      src="https://res.cloudinary.com/dyntsz5qv/image/upload/v1733582100/icon-logo_bvyy4b.png"
      alt="HappyPaws Logo"
      className={twMerge(IconLogoVariants({ size }), className)}
    />
  );
};
