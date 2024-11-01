import React from "react";
import { Heading } from "../Typography";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export interface LogoProps {
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

const TextLogoVariants = cva("dark:text-white", {
  variants: {
    size: {
      small: "text-2xl",
      large: "text-4xl",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export const Logo: React.FC<LogoProps> = ({ size, className = "" }) => {
  return (
    <div className={twMerge("flex items-center justify-center gap-2", className)}>
      <img
        src="./src/assets/icon-logo.png"
        alt="HappyPaws Logo"
        className={IconLogoVariants({ size })}
      />
      <Heading
        level="1"
        color="royal-purple"
        className={twMerge("text-center font-bold", TextLogoVariants({ size }))}
      >
        HappyPaws
      </Heading>
    </div>
  );
};
