import { Sidebar } from "flowbite-react";

export type ContentType = "profile" | "applications" | "favorite-pets" | "donations";

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
        className="hidden w-full md:block"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-row gap-1 lg:gap-0 lg:flex-col text-left ">
            <Sidebar.Item
              href="/account/#profile"
              onClick={() => setActiveContent("profile")}
              active={activeContent === "profile"}
              className={`hover:!text-white  mt-2 hover:bg-royal-purple ${activeContent === "profile" ? "bg-lavender-purple text-white font-semibold" : "text-soft-gray-blue font-medium"}`}
            >
              Perfil
            </Sidebar.Item>
            <Sidebar.Item
              href="/account/#favorite-pets"
              onClick={() => setActiveContent("favorite-pets")}
              active={activeContent === "favorite-pets"}
              className={`hover:!text-white  hover:bg-royal-purple ${activeContent === "favorite-pets" ? "bg-lavender-purple text-white font-semibold" : "text-soft-gray-blue font-medium"}`}
            >
              Mascotas favoritas
            </Sidebar.Item>
            <Sidebar.Item
              href="/account/#applications"
              onClick={() => setActiveContent("applications")}
              active={activeContent === "applications"}
              className={`hover:!text-white  hover:bg-royal-purple ${activeContent === "applications" ? "bg-lavender-purple text-white font-semibold" : "text-soft-gray-blue font-medium"}`}
            >
              Aplicaciones de Adopción
            </Sidebar.Item>
            <Sidebar.Item
              href="/account/#donations"
              onClick={() => setActiveContent("donations")}
              active={activeContent === "donations"}
              className={`hover:!text-white  hover:bg-royal-purple ${activeContent === "donations" ? "bg-lavender-purple text-white font-semibold" : "text-soft-gray-blue font-medium"}`}
            >
              Donaciones
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
            <option value="profile">Perfil</option>
            <option value="favorite-pets">Mascotas favoritas</option>
            <option value="applications">Aplicaciones de Adopción</option>
            <option value="donations">Donaciones</option>
          </select>
        </div>
      </div>
    </div>
  );
};
