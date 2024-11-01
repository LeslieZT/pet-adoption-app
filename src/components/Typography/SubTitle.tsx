interface SubTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const SubTitle: React.FC<SubTitleProps> = ({ children, className = "", ...props }) => {
  const baseStyle =
    "text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] leading-tight font-medium text-royal-purple text-shadow shadow-black/25";

  return (
    <h2
      className={`${baseStyle} ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};
