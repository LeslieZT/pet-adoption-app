import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const ParagraphVariants = cva("dark:text-white", {
  variants: {
    color: {
      primary: "text-slate-gray",
      secondary: "cool-blue",
    },
    size: {
      small: "text-xs md:text-sm", 
      medium: "text-sm md:text-base",
      large: "text-base md:text-lg",
      extraLarge: "text-lg", 
      superLarge: "text-xl", 
      megaLarge: "text-2xl",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "small",
  },
});

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "small" | "medium" | "large" | "extraLarge" | "superLarge" | "megaLarge";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  size = "medium",
  color = "primary",
  children,
  className = "",
  ...props
}) => {
  return (
    <p
      className={twMerge(ParagraphVariants({ color, size }), className)}
      {...props}
    >
      {children}
    </p>
  );
};
