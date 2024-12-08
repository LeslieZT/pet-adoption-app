import React, { useState } from "react";
import { Drawer, Navbar, Sidebar } from "flowbite-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiHome, HiArrowSmRight, HiUserAdd, HiOutlineMail, HiCurrencyDollar } from "react-icons/hi";
import { MdOutlinePets } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { CustomButton } from "../Buttons";
import { IconLogo, Logo } from "../Logo";
import { useAuthStore } from "../../store/Auth.store";
import { PiSignOutBold } from "react-icons/pi";

export const NavbarApp: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, signOut } = useAuthStore((state) => state);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleSidebar = () => setIsDrawerOpen(!isDrawerOpen);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (isDrawerOpen) toggleSidebar();
  };

  const handleSignOut = async () => {
    await signOut();
    setActiveLink("home");
    navigate("/");
  };

  return (
    <>
      <div className="sticky top-0 z-30 bg-white shadow-md">
        <Navbar className="py-4 px-4 w-full">
          <Navbar.Brand
            as={Link}
            to="/"
          >
            <Logo size="large" />
          </Navbar.Brand>
          <Navbar.Toggle onClick={toggleSidebar} />
          <Navbar.Collapse className="hidden md:order-2 md:mt-5 lg:mt-0 md:flex">
            <Navbar.Link
              as={Link}
              to="/"
              onClick={() => handleLinkClick("home")}
              className={`hover:!text-royal-purple text-base ${activeLink === "home" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Inicio
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              to="/adopt"
              onClick={() => handleLinkClick("adopt")}
              className={`hover:!text-royal-purple text-base ${activeLink === "adopt" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Adoptar
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              to="/donate"
              onClick={() => handleLinkClick("donate")}
              className={`hover:!text-royal-purple text-base ${activeLink === "donate" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Donar
            </Navbar.Link>

            <Navbar.Link
              as={Link}
              to="/contact"
              onClick={() => handleLinkClick("contact")}
              className={`hover:!text-royal-purple text-base ${activeLink === "contact" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Contáctanos
            </Navbar.Link>
          </Navbar.Collapse>

          <div className="hidden gap-4 md:flex lg:order-2">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <NavLink
                  to="/account"
                  onClick={() => handleLinkClick("account")}
                  className={`hover:text-royal-purple text-base flex items-end justify-center gap-1 ${
                    activeLink === "account"
                      ? "text-royal-purple font-bold"
                      : "text-soft-gray-blue font-medium"
                  }`}
                >
                  <FaUserCircle className="h-8 w-8" />
                  <span>Mi Cuenta</span>
                </NavLink>
                <CustomButton onClick={() => handleSignOut()}> Cerrar Sesión </CustomButton>
              </div>
            ) : (
              <>
                <CustomButton>
                  <Link to="/sign-in">Inicia Sesión</Link>
                </CustomButton>
                <CustomButton color="light-pastel-lilac">
                  <Link to="/sign-up">Regístrate</Link>
                </CustomButton>
              </>
            )}
          </div>
        </Navbar>
      </div>

      {/* Drawer Navigation */}

      <Drawer
        open={isDrawerOpen}
        onClose={toggleSidebar}
      >
        <Drawer.Header
          title="HappyPaws"
          titleIcon={() => <></>}
        />
        <Drawer.Items>
          <Sidebar
            aria-label="HappyPaws sidebar"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex items-center justify-center">
              <IconLogo
                size="large"
                className="mb-5"
              />
            </div>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  as={Link}
                  to="/"
                  icon={HiHome}
                  onClick={() => handleLinkClick("home")}
                  className={` hover:!text-white  hover:bg-lavender-purple ${activeLink === "home" ? "bg-royal-purple text-white font-bold sidebar-item-active" : "text-soft-gray-blue font-medium"}`}
                >
                  Inicio
                </Sidebar.Item>

                <Sidebar.Item
                  as={Link}
                  to="/adopt"
                  icon={MdOutlinePets}
                  onClick={() => handleLinkClick("adopt")}
                  className={` hover:!text-white  hover:bg-lavender-purple sidebar-item ${activeLink === "adopt" ? "bg-royal-purple text-white font-bold sidebar-item-active" : "text-soft-gray-blue font-medium"}`}
                >
                  Adoptar
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  to="/donate"
                  icon={HiCurrencyDollar}
                  onClick={() => handleLinkClick("donate")}
                  className={`hover:!text-white  hover:bg-lavender-purple sidebar-item ${activeLink === "donate" ? "bg-royal-purple text-white font-bold sidebar-item-active" : "text-soft-gray-blue font-medium"}`}
                >
                  Donar
                </Sidebar.Item>

                <Sidebar.Item
                  as={Link}
                  to="/contact"
                  icon={HiOutlineMail}
                  onClick={() => handleLinkClick("contact")}
                  className={`hover:!text-white  hover:bg-lavender-purple sidebar-item ${activeLink === "contact" ? "bg-royal-purple text-white font-bold sidebar-item-active" : "text-soft-gray-blue font-medium"}`}
                >
                  Contáctanos
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                {isAuthenticated ? (
                  <>
                    <Sidebar.Item
                      as={Link}
                      to="/account"
                      icon={FaUserCircle}
                      onClick={() => handleLinkClick("account")}
                      className={`hover:!text-white  hover:bg-lavender-purple sidebar-item ${activeLink === "account" ? "bg-royal-purple text-white font-bold sidebar-item-active" : "text-soft-gray-blue font-medium"}`}
                    >
                      Mi Cuenta
                    </Sidebar.Item>
                    <Sidebar.Item
                      to="/account"
                      icon={PiSignOutBold}
                      onClick={handleSignOut}
                      className={`hover:!text-white  hover:bg-lavender-purple sidebar-item ${activeLink === "account" ? "bg-royal-purple text-white font-bold sidebar-item-active" : "text-soft-gray-blue font-medium"}`}
                    >
                      Cerrar Sesión
                    </Sidebar.Item>
                  </>
                ) : (
                  <>
                    <Sidebar.Item
                      as={Link}
                      to="/sign-in"
                      icon={HiArrowSmRight}
                      onClick={() => handleLinkClick("sign-in")}
                      className={`hover:!text-white  hover:bg-lavender-purple sidebar-item ${activeLink === "sign-in" ? "bg-royal-purple text-white font-bold sidebar-item-active" : "text-soft-gray-blue font-medium"}`}
                    >
                      Inicia Sesión
                    </Sidebar.Item>
                    <Sidebar.Item
                      as={Link}
                      to="/sign-up"
                      icon={HiUserAdd}
                      onClick={() => handleLinkClick("sign-up")}
                      className={`hover:!text-white  hover:bg-lavender-purple sidebar-item ${activeLink === "sign-up" ? "bg-royal-purple text-white font-bold sidebar-item-active" : "text-soft-gray-blue font-medium"}`}
                    >
                      Regístrate
                    </Sidebar.Item>
                  </>
                )}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};
