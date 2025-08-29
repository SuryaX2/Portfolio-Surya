import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenu = useRef();

  const setMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const openMenu = () => {
    sideMenu.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenu.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="bg" className="w-full" />
      </div>
      <nav
        className={`${
          isScroll
            ? "bg-white opacity-95 backdrop-blur-lg shadow-sm dark:bg-[var(--darkTheme)] dark:shadow-white/20"
            : ""
        } w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50`}
      >
        <a href="#top">
          <h2 className="cursor-pointer text-4xl font-light inline-block overflow-y-hidden">
            Rounak
          </h2>
          <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-1"></span>
        </a>

        <ul
          className={`font-ovo hidden md:flex  items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white hidden shadow-sm opacity-90 dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          <button>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6 cursor-pointer"
              onClick={setMode}
            ></Image>
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={!isDarkMode ? assets.arrow_icon : assets.arrow_icon_dark}
              alt="arrow-icon"
              className="w-3"
            />
          </a>
          <button onClick={openMenu} className="block md:hidden">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6 cursor-pointer"
            ></Image>
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenu}
          className="font-ovo md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-200 h-screen bg-rose-50 transition duration-500 dark:bg-[var(--darkHover)] dark:text-white"
        >
          <div className="absolute right-6 top-6">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
              onClick={closeMenu}
            ></Image>
          </div>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
