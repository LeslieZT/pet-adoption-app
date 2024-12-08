import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "flowbite-react";
import { AccountSidebar, ContentType } from "../components/Navbar/Sidebar";
import {
  ProfileSection,
  AplicationSection,
  FavoritePetsSection,
  DonationUserSection,
} from "../view/Account";
import { MainLayout } from "../layouts/Main.layout";

const AccountPage: React.FC = () => {
  const [activeContent, setActiveContent] = useState<ContentType>("profile");
  const location = useLocation();

  useEffect(() => {
    setActiveContent(location.hash.substring(1) as ContentType);
  }, []);

  const renderContent = () => {
    switch (activeContent) {
      case "profile":
        return <ProfileSection />;
      case "applications":
        return <AplicationSection />;
      case "favorite-pets":
        return <FavoritePetsSection />;
      case "donations":
        return <DonationUserSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <MainLayout>
      <div className="flex md:min-h-[80vh] flex-col lg:flex-row gap-4 items-stretch">
        <AccountSidebar
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
        <Card className="w-full">{renderContent()}</Card>
      </div>
    </MainLayout>
  );
};

export default AccountPage;
