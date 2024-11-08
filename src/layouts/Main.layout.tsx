import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto min-w-[300px] max-w-screen-2xl p-8 pb-36 md:pb-16">{children}</div>
  );
};
