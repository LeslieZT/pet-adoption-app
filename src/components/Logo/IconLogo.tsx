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
        src="./src/assets/icon-logo.png"
        alt="HappyPaws Logo"
        className={twMerge(IconLogoVariants({ size }), className)}
      />
    
  );
};
