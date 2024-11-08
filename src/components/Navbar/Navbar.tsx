import React, { useState } from "react";
import { Drawer, Navbar, Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  HiHome,
  HiArrowSmRight,
  HiUserAdd,
  HiOutlineMail,
  HiCurrencyDollar,
  HiHeart,
} from "react-icons/hi";
import { MdOutlinePets } from "react-icons/md";
import { CustomButton } from "../Buttons";
import { IconLogo, Logo } from "../Logo";
import { FaUserCircle } from "react-icons/fa";

export const NavbarApp: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleSidebar = () => setIsDrawerOpen(!isDrawerOpen);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (isDrawerOpen) toggleSidebar();
  };

  return (
    <>
      <div className="sticky top-0 z-30 bg-white shadow-md">
        <Navbar className="py-4 px-4">
          <Navbar.Brand
            as={Link}
            to="/"
          >
            <Logo size="large" />
          </Navbar.Brand>
          <Navbar.Toggle onClick={toggleSidebar} />
          <Navbar.Collapse className="hidden md:flex ">
            <Navbar.Link
              as={Link}
              to="/"
              onClick={() => handleLinkClick("home")}
              className={`hover:!text-royal-purple text-base ${activeLink === "home" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Home
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              to="/adopt"
              onClick={() => handleLinkClick("adopt")}
              className={`hover:!text-royal-purple text-base ${activeLink === "adopt" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Adopt
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              to="/donate"
              onClick={() => handleLinkClick("donate")}
              className={`hover:!text-royal-purple text-base ${activeLink === "donate" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Donate
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              to="/blog"
              onClick={() => handleLinkClick("blog")}
              className={`hover:!text-royal-purple text-base ${activeLink === "blog" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Blog
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              to="/contact"
              onClick={() => handleLinkClick("contact")}
              className={`hover:!text-royal-purple text-base ${activeLink === "contact" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Contact
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              to="/account"
              onClick={() => handleLinkClick("account")}
              className={`hover:!text-royal-purple text-base ${activeLink === "account" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              My Account
            </Navbar.Link>
          </Navbar.Collapse>

          <div className="hidden gap-4 md:order-2 md:flex md:justify-end md:mt-4 md:w-full lg:w-auto lg:mt-0">
            <CustomButton>
              <Link to="/sign-in">Sign In</Link>
            </CustomButton>
            <CustomButton color="light-pastel-lilac">
              <Link to="/sign-up">Sign Up</Link>
            </CustomButton>
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
                  className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "home" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
                >
                  Home
                </Sidebar.Item>

                <Sidebar.Item
                  as={Link}
                  to="/adopt"
                  icon={MdOutlinePets}
                  onClick={() => handleLinkClick("adopt")}
                  className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "adopt" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
                >
                  Adopt
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  to="/donate"
                  icon={HiCurrencyDollar}
                  onClick={() => handleLinkClick("donate")}
                  className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "donate" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
                >
                  Donate
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  to="/blog"
                  icon={HiHeart}
                  onClick={() => handleLinkClick("blog")}
                  className={`hover:!text-white   hover:bg-lavender-purple ${activeLink === "blog" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
                >
                  Blog
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  to="/contact"
                  icon={HiOutlineMail}
                  onClick={() => handleLinkClick("contact")}
                  className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "contact" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
                >
                  Contact
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  as={Link}
                  to="/account"
                  icon={FaUserCircle}
                  onClick={() => handleLinkClick("account")}
                  className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "account" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
                >
                  My Account
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  to="/sign-in"
                  icon={HiArrowSmRight}
                  onClick={() => handleLinkClick("sign-in")}
                  className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "sign-in" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
                >
                  Sign In
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  to="/sign-up"
                  icon={HiUserAdd}
                  onClick={() => handleLinkClick("sign-up")}
                  className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "sign-up" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
                >
                  Sign Up
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};
