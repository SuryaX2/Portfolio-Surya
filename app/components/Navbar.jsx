import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const sideMenuRef = useRef();
  const { scrollY } = useScroll();

  // Smooth scroll-based transforms
  const navbarY = useTransform(scrollY, [0, 100], [0, -2]);
  const navbarOpacity = useTransform(scrollY, [0, 50], [1, 0.98]);

  const navigationItems = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  // Animation variants for better organization and reusability
  const navbarVariants = {
    hidden: {
      y: -100,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        rotate: {
          duration: 0.6,
          ease: "easeInOut",
        },
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      y: -20,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    hover: {
      y: -3,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileMenuItemVariants = {
    closed: {
      x: 50,
      opacity: 0,
      scale: 0.8,
    },
    open: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1,
      },
    },
  };

  // Theme toggle with smooth rotation
  const themeVariants = {
    light: { rotate: 0 },
    dark: { rotate: 180 },
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  };

  // Handle theme toggle
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Update active section based on scroll position
      const sections = navigationItems.map((item) => item.href.substring(1));
      let currentSection = "Home";

      sections.forEach((section) => {
        const element = document.getElementById(
          section === "top" ? "top" : section
        );
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection =
              navigationItems.find((item) => item.href === `#${section}`)
                ?.label || "Home";
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationItems]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Background decoration */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="bg" className="w-full" />
      </div>

      {/* Main Navigation Bar */}
      <motion.nav
        className={`${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100 dark:bg-[var(--darkTheme)]/90 dark:shadow-2xl dark:shadow-blue-500/5 dark:border-white/5"
            : "bg-transparent"
        } w-full fixed top-0 left-0 right-0 px-5 lg:px-8 xl:px-[8%] py-4 z-50 transition-all duration-500 ease-out`}
        style={{ y: navbarY, opacity: navbarOpacity }}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo with enhanced animation */}
          <motion.a
            href="#top"
            variants={logoVariants}
            whileHover="hover"
            className="group relative z-10"
          >
            <div className="flex items-center">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-white relative overflow-hidden">
                Surya
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: "100%", opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />
              </h2>

              {/* Animated dot */}
              <motion.span
                className="inline-block w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full ml-2"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.a>

          {/* Desktop Navigation Menu */}
          <motion.div
            className={`hidden md:flex items-center gap-1 lg:gap-2 rounded-2xl px-6 lg:px-8 py-3 ${
              isScrolled
                ? "bg-gray-50/50 dark:bg-white/5"
                : "bg-white/70 dark:bg-gray-800/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg dark:shadow-2xl"
            } transition-all duration-500`}
            variants={navbarVariants}
          >
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={menuItemVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative"
              >
                <a
                  href={item.href}
                  className={`relative px-4 py-2 text-sm lg:text-base font-medium rounded-xl transition-all duration-300 ${
                    activeSection === item.label
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  }`}
                >
                  {item.label}

                  {/* Active indicator with smooth animation */}
                  <AnimatePresence>
                    {activeSection === item.label && (
                      <motion.div
                        className="absolute inset-0 bg-blue-100 dark:bg-blue-500/20 rounded-xl -z-10"
                        layoutId="activeTab"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Hover dot indicator */}
                  <motion.div
                    className="absolute -bottom-3 left-1/2 w-1 h-1 bg-blue-500 rounded-full"
                    initial={{ scale: 0, x: "-50%", opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    }}
                  />
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Theme Toggle Button */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleThemeToggle}
              className="relative p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 group"
              aria-label="Toggle theme"
            >
              <motion.div
                variants={themeVariants}
                animate={isDarkMode ? "dark" : "light"}
              >
                <Image
                  src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                  alt="theme toggle"
                  className="w-5 h-5"
                />
              </motion.div>

              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-yellow-400 dark:bg-blue-400 opacity-0 group-hover:opacity-10"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2, opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Contact Button - Desktop Only */}
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="hidden lg:flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-xl"
            >
              {/* Background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              <span className="relative z-10">Contact</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={assets.arrow_icon_dark}
                  alt="arrow"
                  className="w-3 h-3 brightness-0 invert"
                />
              </motion.div>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={toggleMobileMenu}
              className="block md:hidden p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={isDarkMode ? assets.menu_white : assets.menu_black}
                  alt="menu"
                  className="w-5 h-5"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={sideMenuRef}
            className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl z-50 shadow-2xl border-l border-gray-200/50 dark:border-gray-700/50 md:hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Close Button */}
            <div className="absolute right-6 top-6">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeMobileMenu}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Close menu"
              >
                <Image
                  src={isDarkMode ? assets.close_white : assets.close_black}
                  alt="close"
                  className="w-5 h-5"
                />
              </motion.button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="pt-20 pb-8 px-6">
              <motion.div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={mobileMenuItemVariants}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`block py-4 px-6 text-lg font-medium rounded-xl transition-all duration-300 ${
                        activeSection === item.label
                          ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/20"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800/50"
                      }`}
                    >
                      <motion.span className="flex items-center justify-between">
                        {item.label}
                        {activeSection === item.label && (
                          <motion.div
                            className="w-2 h-2 bg-blue-500 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          />
                        )}
                      </motion.span>
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Contact Button */}
              <motion.div variants={mobileMenuItemVariants} className="pt-8">
                <motion.a
                  href="#contact"
                  onClick={closeMobileMenu}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium shadow-lg"
                >
                  Contact Me
                  <Image
                    src={assets.arrow_icon_dark}
                    alt="arrow"
                    className="w-4 h-4 brightness-0 invert"
                  />
                </motion.a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
