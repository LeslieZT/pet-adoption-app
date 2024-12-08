import type { ButtonProps } from "flowbite-react";
import { Button } from "flowbite-react";
import { customTheme } from "../../theme";

export type CustomButtonProps = Omit<ButtonProps, "theme" | "color"> & {
  color?:
    | "white"
    | "royal-purple"
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
      theme={customTheme["button"]}
      color={color}
      {...props}
    />
  );
};
