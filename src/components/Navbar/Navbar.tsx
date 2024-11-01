import React, { useState } from "react";
import { Navbar, Sidebar } from "flowbite-react";
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

export const NavbarApp: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (isSidebarOpen) toggleSidebar();
  };

  return (
    <>
      <div className="sticky top-0 z-30 bg-white shadow-md">
        <Navbar className="py-4 px-4">
          <Navbar.Brand href="/">
            <Logo size="small" />
          </Navbar.Brand>
          <Navbar.Toggle onClick={toggleSidebar} />
          <Navbar.Collapse className="hidden md:flex ">
            <Navbar.Link
              href="/"
              onClick={() => handleLinkClick("home")}
              className={`hover:!text-royal-purple text-base ${activeLink === "home" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Home
            </Navbar.Link>
            <Navbar.Link
              href="/adopt"
              onClick={() => handleLinkClick("adopt")}
              className={`hover:!text-royal-purple text-base ${activeLink === "adopt" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Adopt
            </Navbar.Link>
            <Navbar.Link
              href="/donate"
              onClick={() => handleLinkClick("donate")}
              className={`hover:!text-royal-purple text-base ${activeLink === "donate" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Donate
            </Navbar.Link>
            <Navbar.Link
              href="/blog"
              onClick={() => handleLinkClick("blog")}
              className={`hover:!text-royal-purple text-base ${activeLink === "blog" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Blog
            </Navbar.Link>
            <Navbar.Link
              href="/contact"
              onClick={() => handleLinkClick("contact")}
              className={`hover:!text-royal-purple text-base ${activeLink === "contact" ? "text-royal-purple font-bold" : "text-soft-gray-blue"}`}
            >
              Contact
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

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-30 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-gray-800 bg-opacity-50"
          onClick={toggleSidebar}
        ></div>

        <Sidebar
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-label="HappyPaws sidebar"
        >
          <div className="flex items-center justify-center">
            <IconLogo
              size="small"
              className="mb-5"
            />
          </div>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="/"
                icon={HiHome}
                onClick={() => handleLinkClick("home")}
                className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "home" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
              >
                Home
              </Sidebar.Item>

              <Sidebar.Item
                href="/adopt"
                icon={MdOutlinePets}
                onClick={() => handleLinkClick("adopt")}
                className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "adopt" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
              >
                Adopt
              </Sidebar.Item>
              <Sidebar.Item
                href="/donate"
                icon={HiCurrencyDollar}
                onClick={() => handleLinkClick("donate")}
                className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "donate" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
              >
                Donate
              </Sidebar.Item>
              <Sidebar.Item
                href="/blog"
                icon={HiHeart}
                onClick={() => handleLinkClick("blog")}
                className={`hover:!text-white   hover:bg-lavender-purple ${activeLink === "blog" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
              >
                Blog
              </Sidebar.Item>
              <Sidebar.Item
                href="/contact"
                icon={HiOutlineMail}
                onClick={() => handleLinkClick("contact")}
                className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "contact" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
              >
                Contact
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="/sign-in"
                icon={HiArrowSmRight}
                onClick={() => handleLinkClick("sign-in")}
                className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "sign-in" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
              >
                Sign In
              </Sidebar.Item>
              <Sidebar.Item
                href="/sign-up"
                icon={HiUserAdd}
                onClick={() => handleLinkClick("sign-up")}
                className={`hover:!text-white  hover:bg-lavender-purple ${activeLink === "sign-up" ? "bg-royal-purple text-white font-bold" : "text-soft-gray-blue font-medium"}`}
              >
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
};
