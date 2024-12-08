import React from "react";
import { Logo } from "../components/Logo/Logo";

export interface AuthenticatioLayoutProps {
  coverImage: string;
  alt: string;
  children: React.ReactNode;
}
export const AuthenticatioLayout: React.FC<AuthenticatioLayoutProps> = ({
  children,
  coverImage,
  alt,
}) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden lg:flex lg:w-1/2 bg-white items-center justify-center">
        <img
          src={coverImage}
          alt={alt}
          className="w-full h-full"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-8 sm:p-4">
        <Logo
          size="large"
          className="mb-5 md:mb-10"
        />
        {children}
      </div>
    </div>
  );
};
