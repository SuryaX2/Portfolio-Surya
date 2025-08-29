import { assets, educationData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const rotateFadeIn = {
  hidden: { opacity: 0, y: 50, rotate: -7 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Education = () => {
  return (
    <motion.div
      id="education"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Always animates when scrolled into view
      variants={staggerContainer}
    >
      {/* Section Headers */}
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        variants={fadeInUp}
      >
        Where I have studied
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-ovo "
        variants={fadeInUp}
      >
        My Education
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-600 dark:text-white/80"
        variants={fadeInUp}
      >
        I completed my secondary and higher secondary education at Bhatpara
        Amarkrishna Pathsala, where I developed a strong academic foundation.
        Following that, I am pursuing a Bachelor of Technology (B.Tech) degree
        at Narula Institute of Technology, where I am currently advancing my
        knowledge and skills in the field of INFORMATION TECHNOLOGY.
      </motion.p>

      {/* Education Cards */}
      <motion.div
        className="grid gap-6 my-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
        variants={staggerContainer}
      >
        {educationData.map(({ icon, title, description, link }, ind) => (
          <motion.div
            key={ind}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer relative overflow-hidden
                       hover:shadow-[var(--boxShadow-light-mode)] hover:-translate-y-1 transition-all duration-500
                       dark:hover:bg-[var(--darkHover)] dark:hover:shadow-[var(--boxShadow-dark-mode)]"
            variants={rotateFadeIn}
            whileHover={{
              scale: 1.07,
              rotate: 2,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
          >
            {/* Animated Glow Effect */}
            <motion.div
              className="absolute w-16 h-16 bg-blue-500 opacity-20 rounded-full blur-2xl top-0 right-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <Image src={icon} className="w-20 mx-auto mb-4" alt={title} />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white text-center font-semibold">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80 text-center">
              {description}
            </p>
            <a
              href={link}
              className="flex justify-center items-center gap-2 text-sm mt-5 text-blue-500 font-medium"
            >
              Read more{" "}
              <Image src={assets.right_arrow} alt="arrow" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Education;
