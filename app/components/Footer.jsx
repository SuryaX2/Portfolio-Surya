import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const Footer = ({ isDarkMode }) => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.footer
      className="relative mt-20 overflow-hidden "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-20 right-16 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute bottom-10 left-1/3 w-20 h-20 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{
            scale: [1, 0.8, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/60 dark:bg-gray-300/60 rounded-full"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </motion.div>

      {/* Main Footer Content */}
      <div className="relative z-10 px-[6%] lg:px-[12%] py-16">
        {/* Top Section - Logo and Intro */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          {/* Enhanced Logo */}
          <motion.div
            className="mb-8"
            variants={fadeInUp}
            {...floatingAnimation}
          >
            <motion.h2
              className="text-6xl lg:text-7xl font-light mb-4 p-4 text-gray-800 dark:text-white relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Surya
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </motion.h2>
            <motion.span
              className="inline-block w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full ml-2"
              {...pulseAnimation}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl lg:text-2xl font-ovo text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Crafting digital experiences with{" "}
            <motion.span
              className="text-blue-600 dark:text-blue-400 font-semibold cursor-pointer"
              whileHover={{ scale: 1.05, color: "#8b5cf6" }}
            >
              passion
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="text-purple-600 dark:text-purple-400 font-semibold cursor-pointer"
              whileHover={{ scale: 1.05, color: "#3b82f6" }}
            >
              precision
            </motion.span>
            . Let's build something amazing together.
          </motion.p>
        </motion.div>

        {/* Middle Section - Contact Info and Social */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 mb-16"
          variants={staggerContainer}
        >
          {/* Contact Info */}
          <motion.div className="text-center lg:text-left" variants={fadeInUp}>
            <motion.h3
              className="text-3xl font-bold text-gray-800 dark:text-white mb-8 relative inline-block font-ovo"
              whileHover={{ color: "#3b82f6" }}
            >
              Let's Connect
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.h3>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 mb-6 group cursor-pointer p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-all duration-300"
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                  alt="email"
                  className="w-6 h-6 filter brightness-0 invert"
                />
              </motion.div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-ovo">
                  Email me at
                </p>
                <span className="font-ovo text-lg text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 font-medium">
                  sekharsurya111@gmail.com
                </span>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-600 dark:text-gray-400 font-ovo leading-relaxed text-lg"
              variants={fadeInUp}
            >
              Available for freelance projects and collaborations.
              <br />
              <motion.span
                className="text-blue-600 dark:text-blue-400 font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                Let's create something extraordinary together!
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Social Media */}
          <motion.div className="text-center lg:text-right" variants={fadeInUp}>
            <motion.h3
              className="text-3xl font-bold text-gray-800 dark:text-white mb-8 relative inline-block font-ovo"
              whileHover={{ color: "#8b5cf6" }}
            >
              Follow Me
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.h3>

            <div className="flex justify-center lg:justify-end gap-4 mb-6">
              {[
                {
                  name: "GitHub",
                  url: "https://github.com/SuryaX2",
                  color: "from-gray-700 to-gray-900",
                  icon: "🔗",
                },
                {
                  name: "LinkedIn",
                  url: "https://linkedin.com/in/suryax2",
                  color: "from-blue-500 to-blue-700",
                  icon: "🔗",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-8 py-4 bg-gradient-to-r ${social.color} text-white rounded-2xl font-medium shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border border-gray-200 dark:border-gray-700`}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.9 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{ translateX: ["100%", "-100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "linear",
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-lg">{social.icon}</span>
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.p
              className="text-gray-600 dark:text-gray-400 font-ovo text-lg leading-relaxed"
              variants={fadeInUp}
            >
              Stay updated with my latest projects
              <br />
              <motion.span
                className="text-purple-600 dark:text-purple-400 font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                and tech insights!
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div className="mb-16 text-center" variants={fadeInUp}>
          <motion.h3
            className="text-2xl font-bold text-gray-800 dark:text-white mb-8 relative inline-block font-ovo"
            whileHover={{ color: "#ec4899" }}
          >
            Quick Navigation
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                name: "About Me",
                href: "#about",
                color: "from-blue-500 to-blue-600",
              },
              {
                name: "Projects",
                href: "#work",
                color: "from-purple-500 to-purple-600",
              },
              {
                name: "Education",
                href: "#education",
                color: "from-green-500 to-green-600",
              },
              {
                name: "Contact",
                href: "#contact",
                color: "from-pink-500 to-pink-600",
              },
            ].map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`px-6 py-3 bg-gradient-to-r ${link.color} text-white rounded-full font-ovo font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                whileHover={{
                  
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section - Copyright */}
        <motion.div
          className="border-t border-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent pt-8"
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              className="text-gray-600 dark:text-gray-400 font-ovo text-center md:text-left"
              whileHover={{ color: "#3b82f6" }}
            >
              © 2025{" "}
              <motion.span
                className="font-semibold cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Surya Sekhar Sharma
              </motion.span>
              . All rights reserved.
            </motion.p>

            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-gray-500 dark:text-gray-400 font-ovo text-sm">
                Made with
              </span>
              <motion.span
                className="text-red-500 text-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ❤️
              </motion.span>
              <span className="text-gray-500 dark:text-gray-400 font-ovo text-sm">
                in India
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Back to Top Button */}
        <motion.a
          href="#top"
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)",
          }}
          whileTap={{ scale: 0.9 }}
          {...floatingAnimation}
        >
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.div>

          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            Back to Top
          </motion.div>
        </motion.a>
      </div>
    </motion.footer>
  );
};

export default Footer;
