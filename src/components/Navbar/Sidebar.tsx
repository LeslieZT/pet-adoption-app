import { Sidebar } from "flowbite-react";

export type ContentType = "profile" | "applications" | "favorite-pets";

interface AccountSidebarProps {
  activeContent: ContentType;
  setActiveContent: React.Dispatch<React.SetStateAction<ContentType>>;
}

export const AccountSidebar: React.FC<AccountSidebarProps> = ({
  activeContent,
  setActiveContent,
}) => {
  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 h-auto">
      <Sidebar
        aria-label="Account sidebar"
        className="hidden md:block"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="#"
              onClick={() => setActiveContent("profile")}
              active={activeContent === "profile"}
              className={`hover:!text-white  hover:bg-royal-purple ${activeContent === "profile" ? "bg-lavender-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
              >
              Profile
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              onClick={() => setActiveContent("applications")}
              active={activeContent === "applications"}
              className={`hover:!text-white  hover:bg-royal-purple ${activeContent === "applications" ? "bg-lavender-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}

            >
              Adopt Aplications
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              onClick={() => setActiveContent("favorite-pets")}
              active={activeContent === "favorite-pets"}
              className={`hover:!text-white  hover:bg-royal-purple ${activeContent === "favorite-pets" ? "bg-lavender-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}

            >
              Favorite Pets
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <div className="flex-1 p-4">
        <div className="md:hidden mb-4">
          <select
            className="w-full p-2 border rounded"
            value={activeContent}
            onChange={(e) => setActiveContent(e.target.value as ContentType)}
          >
            <option value="profile">Mi Perfil</option>
            <option value="applications">Mis Aplicaciones</option>
            <option value="favorite-pets">Favorite Pets</option>
          </select>
        </div>
      </div>
    </div>
  );
};
