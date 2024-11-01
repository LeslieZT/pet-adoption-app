import type { CustomFlowbiteTheme } from "flowbite-react";
import type { ButtonProps } from "flowbite-react";
import { Button } from "flowbite-react";
import { cva } from "class-variance-authority";

const buttonVariants = cva("transition-colors duration-100", {
  variants: {
    variant: {
      "royal-purple": "bg-royal-purple hover:bg-lavender-purple text-white",
      "vibrant-pink": "bg-vibrant-pink hover:bg-aqua-blue text-white",
      "aqua-blue": "bg-aqua-blue hover:bg-agua-blue/70 text-white",
      "outline-royal-purple":
        "bg-transparent border border-solid border-royal-purple text-royal-purple hover:bg-royal-purple hover:text-white",
      "outline-vibrant-pink":
        "bg-transparent border border-2 border-solid border-vibrant-pink text-vibrant-pink hover:bg-vibrant-pink/70 hover:text-white",
      "outline-aqua-blue":
        "bg-transparent border border-2 border-solid border-aqua-blue text-aqua-blue hover:bg-aqua-blue/70 hover:text-white",
      "outline-lavender-purple":
        "bg-pastel-lilac/10 border border-solid border-pastel-lilac text-royal-purple hover:bg-lavender-purple hover:text-white hover:border-lavender-purple",
    },
  },
  defaultVariants: {
    variant: "royal-purple",
  },
});

const customTheme: CustomFlowbiteTheme["button"] = {
  color: {
    "royal-purple": buttonVariants({ variant: "royal-purple" }),
    "vibrant-pink": buttonVariants({ variant: "vibrant-pink" }),
    "aqua-blue": buttonVariants({ variant: "aqua-blue" }),
  },
  outline: {
    color: {
      "royal-purple": buttonVariants({ variant: "outline-royal-purple" }),
      "lavender-purple": buttonVariants({ variant: "outline-lavender-purple" }),
      "vibrant-pink": buttonVariants({ variant: "outline-vibrant-pink" }),
      "aqua-blue": buttonVariants({ variant: "outline-aqua-blue" }),
    },
    on: "",
  },
};

type CustomButtonProps = Omit<ButtonProps, "theme" | "color"> & {
  color?: "royal-purple" | "vibrant-pink" | "aqua-blue" | "lavender-purple";
};

export const CustomButton: React.FC<CustomButtonProps> = ({ color = "royal-purple", outline = false, ...props }) => {
  return (
    <Button
      theme={customTheme}
      color={color}
      outline={outline}
      {...props}
    />
  );
};
