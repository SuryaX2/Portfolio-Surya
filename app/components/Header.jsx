import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const Header = ({ isDarkMode }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-16 left-8 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"
        animate={{
          x: [0, 60, 0],
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-32 right-12 w-32 h-32 bg-purple-400/15 rounded-full blur-xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-24 left-16 w-20 h-20 bg-pink-400/20 rounded-full blur-xl"
        animate={{
          x: [0, 80, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating dots */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-300 rounded-full opacity-40"
          style={{
            left: `${15 + i * 20}%`,
            top: `${25 + i * 15}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      <motion.div
        className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: false }}
      >
        {/* Greeting with unique styling - closer to original position */}
        <motion.h3
          className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-ovo"
          variants={fadeInUp(0.2)}
        >
          👋 Hello! I'm Surya Sekhar Sharma
        </motion.h3>

        {/* Main title with enhanced styling */}
        <motion.div className="relative" variants={fadeInUp(0.4)}>
          <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo font-bold leading-tight overflow-y-hidden">
            <motion.span
              className="inline-block text-gray-800 dark:text-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Full Stack
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #4f46e5 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Web Developer
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-2xl sm:text-4xl lg:text-5xl text-gray-600 dark:text-gray-400 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              in India.
            </motion.span>
          </h1>
        </motion.div>

        {/* Enhanced description */}
        <motion.div
          className="max-w-2xl mx-auto font-ovo relative"
          variants={fadeInUp(0.6)}
        >
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 px-4">
            Passionate about building
            <motion.span
              className="text-blue-600 dark:text-blue-400 font-medium mx-1"
              whileHover={{ scale: 1.05 }}
            >
              scalable
            </motion.span>
            and
            <motion.span
              className="text-purple-600 dark:text-purple-400 font-medium mx-1"
              whileHover={{ scale: 1.05 }}
            >
              efficient
            </motion.span>
            web applications. Let's connect and create something amazing
            together!
          </p>

          {/* Subtle background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl blur-xl"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Enhanced action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6 mt-4"
          variants={fadeInUp(0.8)}
        >
          <motion.a
            href="#contact"
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg overflow-hidden"
            variants={scaleIn(0.8)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative flex items-center gap-2 z-10">
              Let's Connect
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image src={assets.right_arrow_white} alt="" className="w-4" />
              </motion.div>
            </span>

            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{ translateX: ["100%", "-100%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "linear",
              }}
            />
          </motion.a>

          <motion.a
            className="group px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-full font-medium bg-white/80 dark:bg-violet-300 text-black  backdrop-blur-sm shadow-lg hover:border-blue-400 dark:hover:border-black transition-all duration-300"
            href="/sample-resume.pdf"
            download
            variants={scaleIn(0.9)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              borderColor: "#60a5fa",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              View Resume
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image src={assets.download_icon} alt="" className="w-4" />
              </motion.div>
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
