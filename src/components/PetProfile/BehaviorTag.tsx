import { twMerge } from "tailwind-merge";

interface BehaviorTagProps {
  label: string;
  gender: "male" | "female";
}

export const BehaviorTag: React.FC<BehaviorTagProps> = ({ label, gender }) => {
  const color = gender === "male" ? "aqua-blue" : "vibrant-pink";

  return (
    <span
      className={twMerge(
        "flex items-center justify-center py-3 px-5 rounded-3xl text-sm md:text-base text-slate-gray",
        ` border-2 border-solid border-${color}`,
      )}
    >
      {label}
    </span>
  );
};
