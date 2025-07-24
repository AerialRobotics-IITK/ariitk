"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const NavMenu = () => {
  const usePathName = usePathname();
  return (
    <ul className="block lg:flex lg:space-x-12">
      {menuData.map((menuItem, index) => (
        <li key={index} className="group relative">
            <Link
              href={menuItem.path}
              target={menuItem.newTab ? "_blank" : "_self"}
              rel={menuItem.newTab ? "noopener noreferrer" : ""}
              className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                usePathName === menuItem.path
                  ? "text-primary dark:text-white"
                  : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
              }`}
            >
              {menuItem.title}
            </Link>
        </li>
      ))}
    </ul>
  );
};


const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(true);

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container relative">
          {/* Main layout using a 3-column grid */}
          <div className="grid grid-cols-3 items-center">
            {/* ====== Column 1: Logo ====== */}
            <div className="justify-self-start">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/logo-svg.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="dark:hidden"
                />
                <Image
                  src="/images/logo/6-06.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="hidden dark:block"
                />
              </Link>
            </div>

            {/* ====== Column 2: Desktop Navigation ====== */}
            <div className="hidden justify-self-center lg:block">
               <NavMenu />
            </div>

            {/* ====== Column 3: Right-side controls ====== */}
            <div className="flex items-center justify-self-end">
              <div className="hidden lg:block">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;