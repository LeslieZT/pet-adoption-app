import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <Outlet />
    </div>
  );
};