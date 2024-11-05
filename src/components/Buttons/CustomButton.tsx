import type { CustomFlowbiteTheme } from "flowbite-react";
import type { ButtonProps } from "flowbite-react";
import { Button } from "flowbite-react";
import { cva } from "class-variance-authority";

const buttonVariants = cva("transition-colors duration-100", {
  variants: {
    variant: {
      "royal-purple": "text-white bg-royal-purple hover:bg-lavender-purple",
      white: "text-royal-purple bg-white border-none hover:bg-royal-purple hover:text-white",
      "lavender-purple": "text-white bg-lavender-purple hover:bg-royal-purple",

      "vibrant-pink": "text-white bg-vibrant-pink hover:bg-aqua-blue",
      "aqua-blue": "text-white bg-aqua-blue hover:bg-agua-blue/70",
      "light-royal-purple":
        "text-royal-purple bg-white border border-solid border-royal-purple hover:bg-royal-purple hover:text-white",
      "light-royal-purple-2":
        "text-royal-purple bg-white border border-solid border-royal-purple hover:bg-lavender-purple hover:text-white",
      "light-pastel-lilac":
        "text-royal-purple bg-pastel-lilac/10 border border-solid border-pastel-lilac hover:bg-lavender-purple hover:text-white hover:border-lavender-purple",
      "light-vibrant-pink":
        "text-vibrant-pink bg-white border border-2 border-solid border-vibrant-pink hover:bg-vibrant-pink/70 hover:text-white",
      "light-aqua-blue":
        "text-aqua-blue bg-white border border-2 border-solid border-aqua-blue hover:bg-aqua-blue/70 hover:text-white",
    },
  },
  defaultVariants: {
    variant: "royal-purple",
  },
});

const customTheme: CustomFlowbiteTheme["button"] = {
  color: {
    "royal-purple": buttonVariants({ variant: "royal-purple" }),
    white: buttonVariants({ variant: "white" }),
    "lavender-purple": buttonVariants({ variant: "lavender-purple" }),
    "vibrant-pink": buttonVariants({ variant: "vibrant-pink" }),
    "aqua-blue": buttonVariants({ variant: "aqua-blue" }),
    "light-royal-purple": buttonVariants({ variant: "light-royal-purple" }),
    "light-royal-purple-2": buttonVariants({ variant: "light-royal-purple-2" }),
    "light-pastel-lilac": buttonVariants({ variant: "light-pastel-lilac" }),
    "light-vibrant-pink": buttonVariants({ variant: "light-vibrant-pink" }),
    "light-aqua-blue": buttonVariants({ variant: "light-aqua-blue" }),
  },
};

type CustomButtonProps = Omit<ButtonProps, "theme" | "color"> & {
  color?:
    | "royal-purple"
    | "white"
    | "lavender-purple"
    | "vibrant-pink"
    | "aqua-blue"
    | "light-royal-purple"
    | "light-royal-purple-2"
    | "light-pastel-lilac"
    | "light-vibrant-pink"
    | "light-aqua-blue";
};

export const CustomButton: React.FC<CustomButtonProps> = ({ color = "royal-purple", ...props }) => {
  return (
    <Button
      theme={customTheme}
      color={color}
      {...props}
    />
  );
};
