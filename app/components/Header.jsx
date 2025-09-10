import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion, useReducedMotion } from "framer-motion";

// Enhanced animation variants with GSAP-like easing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom bezier curve
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const subtitleVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

const backgroundElementVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Header = ({ isDarkMode }) => {
  const shouldReduceMotion = useReducedMotion();

  // Simplified animation config for reduced motion users
  const motionConfig = shouldReduceMotion
    ? {
        initial: "visible",
        animate: "visible",
        whileHover: undefined,
        whileTap: undefined,
      }
    : {
        initial: "hidden",
        animate: "visible",
        whileHover: "hover",
        whileTap: "tap",
      };

  return (
    <header className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/40">
      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute inset-0"
        variants={backgroundElementVariants}
        {...motionConfig}
      >
        {/* Primary floating orb */}
        <motion.div
          className="absolute top-20 left-12 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/20 rounded-full blur-2xl"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 80, 0],
                  y: [0, 40, 0],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />

        {/* Secondary floating orb */}
        <motion.div
          className="absolute top-40 right-16 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/15 rounded-full blur-2xl"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -60, 0],
                  y: [0, 60, 0],
                  scale: [1, 0.8, 1],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 1.5,
          }}
        />

        {/* Tertiary floating orb */}
        <motion.div
          className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-cyan-400/25 to-blue-400/20 rounded-full blur-xl"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 100, 0],
                  y: [0, -30, 0],
                }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 3,
          }}
        />

        {/* Animated particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400/60 dark:bg-blue-300/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [-20, 20, -20],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }
            }
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i * 0.6,
            }}
          />
        ))}

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(147,197,253,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.02)_1px,transparent_1px)]" />
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 h-full flex flex-col items-center justify-center"
        variants={containerVariants}
        {...motionConfig}
        viewport={{ amount: 0.2, once: true }}
      >
        {/* Greeting */}
        <motion.div className="mb-6" variants={subtitleVariants}>
          <motion.span
            className="inline-flex items-center gap-3 px-4 py-2 bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 font-medium text-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    scale: 1.05,
                  }
            }
            transition={{ duration: 0.2 }}
          >
            <motion.span
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [0, 14, -8, 14, -4, 10, 0],
                    }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-2xl"
            >
              👋
            </motion.span>
            Hello! I'm Surya Sekhar Sharma
          </motion.span>
        </motion.div>

        {/* Main Title */}
        <motion.div className="text-center mb-8" variants={titleVariants}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
            <motion.div
              className="text-gray-800 dark:text-gray-100 mb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Full Stack
            </motion.div>

            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-extrabold"
                style={{
                  backgroundSize: "200% 200%",
                  animation: shouldReduceMotion
                    ? "none"
                    : "gradientShift 4s ease-in-out infinite",
                }}
              >
                Web Developer
              </span>
            </motion.div>

            <motion.div
              className="text-2xl sm:text-4xl lg:text-5xl text-gray-600 dark:text-gray-400 font-light mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              in India.
            </motion.div>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          variants={descriptionVariants}
        >
          <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-300 text-center px-4">
            Passionate about building{" "}
            <motion.span
              className="text-blue-600 dark:text-blue-400 font-semibold"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.1,
                      textShadow: "0px 0px 8px rgba(59, 130, 246, 0.6)",
                    }
              }
              transition={{ duration: 0.2 }}
            >
              scalable
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="text-purple-600 dark:text-purple-400 font-semibold"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.1,
                      textShadow: "0px 0px 8px rgba(147, 51, 234, 0.6)",
                    }
              }
              transition={{ duration: 0.2 }}
            >
              efficient
            </motion.span>{" "}
            web applications. Let's connect and create something amazing
            together!
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6"
          variants={buttonVariants}
        >
          {/* Primary CTA */}
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-xl overflow-hidden transform-gpu"
            variants={buttonVariants}
            whileHover={shouldReduceMotion ? {} : "hover"}
            whileTap={shouldReduceMotion ? {} : "tap"}
            aria-label="Contact me to start a project"
          >
            <span className="relative flex items-center gap-3 z-10">
              Let's Connect
              <motion.div
                animate={shouldReduceMotion ? {} : { x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Image
                  src={assets.right_arrow_white}
                  alt="Arrow pointing right"
                  className="w-4 h-4"
                />
              </motion.div>
            </span>

            {/* Enhanced button effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full skew-x-12"
              animate={
                shouldReduceMotion ? {} : { translateX: ["200%", "-200%"] }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0"
              whileHover={shouldReduceMotion ? {} : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="/sample-resume.pdf"
            download
            className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold bg-white/80 dark:bg-purple-500/80 text-gray-800 dark:text-gray-200 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
            variants={buttonVariants}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    scale: 1.05,
                    y: -2,
                    borderColor: "#60a5fa",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    color: "black",
                  }
            }
            whileTap={shouldReduceMotion ? {} : "tap"}
            aria-label="Download my resume"
          >
            <span className="flex items-center gap-3">
              View Resume
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Image
                  src={assets.download_icon}
                  alt="Download icon"
                  className="w-4 h-4"
                />
              </motion.div>
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
