import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

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
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="bg" className="w-full" />
      </div>

      <motion.nav
        className={`${
          isScroll
            ? "bg-white opacity-95 backdrop-blur-xl shadow-sm dark:bg-[var(--darkTheme)] dark:shadow-white/20"
            : ""
        } w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.a
          href="#top"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="group"
        >
          <h2 className="cursor-pointer text-4xl font-light inline-block overflow-y-hidden relative">
            Surya
            {/* Subtle underline animation */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </h2>
          <motion.span
            className="inline-block w-2 h-2 bg-red-500 rounded-full ml-1"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.a>

        {/* Desktop Menu */}
        <motion.ul
          className={`font-ovo hidden md:flex items-center gap-6 lg:gap-8 rounded-2xl px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white/80 hidden shadow-sm opacity-90 dark:border dark:border-white/50 dark:bg-gray-700/20 backdrop-blur-2xl dark:shadow-white/10"
          }`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {["Home", "About me", "Education", "Projects", "Contact me"].map(
            (item, index) => {
              const hrefs = [
                "#top",
                "#about",
                "#education",
                "#work",
                "#contact",
              ];
              return (
                <motion.li
                  key={item}
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="relative group"
                >
                  <a
                    href={hrefs[index]}
                    className="relative py-2 px-3 rounded-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item}
                    {/* Hover dot indicator */}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, x: "-50%" }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </a>
                </motion.li>
              );
            }
          )}
        </motion.ul>

        {/* Action Buttons */}
        <div className="flex gap-4 items-center">
          {/* Theme Toggle */}
          <motion.button
            className="relative p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={setMode}
          >
            <motion.div
              animate={{ rotate: isDarkMode ? 180 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt="theme"
                className="w-6 cursor-pointer"
              />
            </motion.div>
            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-yellow-400 dark:bg-blue-400 opacity-0"
              whileHover={{ opacity: 0.1, scale: 1.3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-400 rounded-full ml-4 font-ovo dark:border-white/50 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 group relative overflow-hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Subtle background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Contact</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={!isDarkMode ? assets.arrow_icon : assets.arrow_icon_dark}
                alt="arrow"
                className="w-3"
              />
            </motion.div>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={openMenu}
            className="block md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6 cursor-pointer"
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenu}
          className="font-ovo md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50/95 backdrop-blur-3xl transition duration-500 dark:bg-[var(--darkHover)]/95 dark:text-white shadow-2xl border-l border-white/20 dark:border-white/10 opacity-90"
        >
          <div className="absolute right-6 top-6">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeMenu}
            >
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt="close"
                className="w-5 cursor-pointer"
              />
            </motion.button>
          </div>

          {["Home", "About me", "Education", "Projects", "Contact me"].map(
            (item, index) => {
              const hrefs = [
                "#top",
                "#about",
                "#education",
                "#work",
                "#contact",
              ];
              return (
                <motion.li
                  key={item}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <a
                    href={hrefs[index]}
                    onClick={closeMenu}
                    className="block py-3 px-4 rounded-lg hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item}
                  </a>
                </motion.li>
              );
            }
          )}
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
