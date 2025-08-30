import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="px-[12%] py-20 scroll-mt-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-32 right-16 w-24 h-24 bg-gradient-to-r from-pink-400/10 to-yellow-400/10 rounded-full blur-2xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.h4
          className="text-lg font-ovo text-blue-600 dark:text-blue-400 mb-2"
          variants={fadeInUp}
        >
          Get To Know Me
        </motion.h4>
        <motion.h2
          className="text-5xl lg:text-6xl font-ovo font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          About Me
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
          variants={fadeInUp}
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </div>

      {/* Main Content - New Layout */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Left Side - Image with Enhanced Background */}
        <motion.div
          className="relative flex justify-center lg:justify-start"
          variants={fadeInLeft}
        >
          {/* Decorative Background Elements */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl blur-2xl transform rotate-6"
            {...floatingAnimation}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tl from-pink-100 to-yellow-100 dark:from-pink-900/20 dark:to-yellow-900/20 rounded-3xl blur-xl transform -rotate-3"
            animate={{
              rotate: [-3, 3, -3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Main Image */}
          <motion.div
            className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={assets.aboutme}
              alt="About Me"
              className="w-full h-full object-contain"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Floating dots decoration */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{
                  top: `${20 + i * 12}%`,
                  right: `${10 + (i % 2) * 5}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div className="space-y-8" variants={fadeInRight}>
          {/* About Description */}
          <div className="space-y-6">
            <motion.p
              className="text-lg leading-relaxed font-ovo text-gray-700 dark:text-gray-300"
              variants={fadeInUp}
            >
              I am a passionate{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Full Stack Web Developer
              </span>{" "}
              currently pursuing my studies in college. Throughout my learning
              journey, I have gained hands-on experience in building dynamic and
              responsive web applications.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed font-ovo text-gray-600 dark:text-gray-400"
              variants={fadeInUp}
            >
              I enjoy working with{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                modern technologies
              </span>{" "}
              and continuously expanding my skills to create impactful digital
              solutions that make a difference in people's lives.
            </motion.p>
          </div>

          {/* Info Cards - Redesigned */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={staggerContainer}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 cursor-pointer transition-all duration-300"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <motion.div
                  className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-6 h-6 filter brightness-0 invert"
                  />
                </motion.div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <motion.div className="mt-20" variants={staggerContainer}>
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h3 className="text-3xl lg:text-4xl font-ovo font-bold text-gray-800 dark:text-white mb-4">
            Tech Stack
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div className="relative overflow-hidden" variants={fadeInUp}>
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-[var(--darkTheme)] to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-[var(--darkTheme)] to-transparent z-10" />

          {/* Infinite Scrolling Carousel */}
          <motion.div
            className="flex gap-8 py-8"
            animate={{
              x: [0, -50 * toolsData.length],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: `${toolsData.length * 100}px` }}
          >
            {/* First set of tools */}
            {toolsData.map((tool, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer transition-all duration-150 border border-gray-100 dark:border-gray-700"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={tool}
                  alt="Technology"
                  className="w-20 h-20 object-contain rounded-2xl"
                />
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {toolsData.map((tool, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer transition-all duration-150 border border-gray-100 dark:border-gray-700"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={tool}
                  alt="Technology"
                  className="w-20 h-20 object-contain rounded-2xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
