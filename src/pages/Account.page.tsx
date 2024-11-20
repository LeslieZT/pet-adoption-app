import React, { useState } from "react";
import { Card } from "flowbite-react";
import { AccountSidebar, ContentType } from "../components/Navbar/Sidebar";
import { ProfileSection, AplicationSection, FavoritePetsSection } from "../view/Account";
import { MainLayout } from "../layouts/Main.layout";

const AccountPage: React.FC = () => {
  const [activeContent, setActiveContent] = useState<ContentType>("profile");
  const renderContent = () => {
    switch (activeContent) {
      case "profile":
        return <ProfileSection />;
      case "applications":
        return <AplicationSection />;
      case "favorite-pets":
        return <FavoritePetsSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <MainLayout>
      <div className="flex md:min-h-[80vh] flex-col md:flex-row gap-4 items-stretch">
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
