import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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

const Work = () => {
  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Enhanced Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 30, 0],
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
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 0.8, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/60 dark:bg-gray-300/60 rounded-full"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Enhanced Header Section */}
      <div className="text-center mb-16">
        <motion.div
          className="inline-block px-6 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-4"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase tracking-wider">
            Project Showcase
          </span>
        </motion.div>

        <motion.h2
          className="text-5xl lg:text-6xl font-ovo font-bold mb-6"
          variants={fadeInUp}
        >
          <span className="text-gray-800 dark:text-white">My Latest</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-2">
            Projects
          </span>
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full relative"
          variants={fadeInUp}
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.p
          className="text-center max-w-2xl mx-auto mt-8 mb-12 font-ovo text-gray-600 dark:text-gray-300 text-lg leading-8"
          variants={fadeInUp}
        >
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in{" "}
          <motion.span
            className="text-blue-600 dark:text-blue-400 font-semibold cursor-pointer"
            whileHover={{ scale: 1.05, color: "#8b5cf6" }}
          >
            modern development
          </motion.span>{" "}
          and{" "}
          <motion.span
            className="text-purple-600 dark:text-purple-400 font-semibold cursor-pointer"
            whileHover={{ scale: 1.05, color: "#3b82f6" }}
          >
            creative solutions
          </motion.span>
          .
        </motion.p>
      </div>

      {/* Fixed Project Cards Grid - Consistent sizing regardless of project count */}
      <motion.div
        className="flex flex-wrap justify-center my-10 gap-6 dark:text-black max-w-6xl mx-auto"
        variants={staggerContainer}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-96 h-80 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group flex-shrink-0"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            variants={fadeInUp}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Enhanced Floating Glow Effect */}
            <motion.div
              className="absolute inset-0 w-40 h-40 bg-gradient-to-r from-yellow-400/30 via-orange-400/20 to-red-400/30 opacity-20 blur-2xl"
              animate={{
                x: [0, 100, -100, 0],
                y: [0, 50, -50, 0],
                scale: [1, 1.3, 0.8, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            />

            {/* Original Project Info Box with Enhanced Animations */}
            <motion.div
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg"
              whileHover={{ scale: 1.1 }}
              {...floatingAnimation}
            >
              <div>
                <motion.h2
                  className="font-semibold"
                  whileHover={{ color: "#3b82f6" }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  className="text-sm text-gray-700"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>
              </div>

              {/* Enhanced Button Animation */}
              <motion.div
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: "4px 4px 0px #000",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={project.link} target="blank">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Image src={assets.send_icon} alt="arrow icon" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Call-to-Action Section */}
      <motion.div className="text-center mt-20" variants={fadeInUp}>
        <motion.div className="max-w-4xl mx-auto">
          <motion.h3
            className="text-3xl font-ovo font-bold text-gray-800 dark:text-white mb-4"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
          >
            Want to see more of my work?
          </motion.h3>

          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-8 font-ovo text-lg"
            variants={fadeInUp}
          >
            Check out my GitHub for more projects and contributions to the
            developer community.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://github.com/SuryaX2"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                animate={{ translateX: ["100%", "-100%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "linear",
                }}
              />
              <span className="relative z-10">View GitHub</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.div>
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{ translateX: ["100%", "-100%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "linear",
                }}
              />
              <span className="relative z-10">Let's Connect</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={assets.right_arrow_white}
                  alt="arrow"
                  className="w-4 h-4"
                />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Work;
