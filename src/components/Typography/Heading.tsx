import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const HeadingVariants = cva("dark:text-white", {
  variants: {
    color: {
      white: "text-white",
      "royal-purple": "text-royal-purple",
      "slate-gray": "text-slate-gray",
      "lavender-purple": "text-lavender-purple",
      // "vibrant-pink": "text-vibrant-pink",
      // "aqua-blue": "text-aqua-blue",
    },
    level: {
      "1": "text-4xl",
      "2": "text-3xl",
      "3": "text-2xl",
      "4": "text-xl",
      "5": "text-lg",
      "6": "text-base",
    },
  },
  defaultVariants: {
    color: "royal-purple",
    level: "1",
  },
});

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: "royal-purple" | "slate-gray" | "lavender-purple" | "white"; // "vibrant-pink" | "aqua-blue" ;
  level?: "1" | "2" | "3" | "4" | "5" | "6";
  children: React.ReactNode;
  className?: string;
}

export type TagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Heading: React.FC<HeadingProps> = ({
  level,
  color,
  children,
  className = "",
  ...props
}) => {
  const Tag = `h${level}` as TagType;

  const headingClasses = HeadingVariants({ color, level });

  return (
    <Tag
      className={twMerge(headingClasses, className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
