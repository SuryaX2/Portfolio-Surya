import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="px-[12%] py-10 scroll-mt-20 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // 👈 Ensures animation triggers every time
      variants={staggerContainer}
    >
      {/* Header */}
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        variants={fadeInUp}
      >
        Introduction
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-ovo" variants={fadeInUp}>
        About Me
      </motion.h2>

      {/* Main Content */}
      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        variants={staggerContainer}
      >
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          variants={fadeInUp}
        >
          <Image
            src={assets.aboutme}
            alt="About Me"
            className="w-4xl h-80 rounded-3xl"
          />
        </motion.div>

        {/* About Info */}
        <motion.div className="flex-1" variants={staggerContainer}>
          <motion.p
            className=" mb-10 max-w-2xl font-ovo"
            variants={fadeInUp}
          >
            I am a passionate Full Stack Web Developer currently pursuing my
            studies in college. Throughout my learning journey, I have gained
            hands-on experience in building dynamic and responsive web
            applications. I enjoy working with modern technologies and
            continuously expanding my skills to create impactful digital
            solutions.
          </motion.p>

          {/* Info Cards */}
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            variants={staggerContainer}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                className="border-[0.5px]  overflow-y-hidden border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[var(--lightHover)] hover:-translate-y-1 duration-500 hover:shadow-[var(--boxShadow-light-mode)] dark:boder-white dark:hover:shadow-white dark:hover:bg-[var(--darkHover)]/50 dark:hover:shadow-[var(--boxShadow-dark-mode)]"
                variants={fadeInUp}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className=" w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className=" text-gray-700 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            className="my-6 text-gray-700 font-ovo dark:text-white/80"
            variants={fadeInUp}
          >
            Tools I use
          </motion.h4>
          <motion.ul
            className="flex items-center gap-3 sm:gap-5 n"
            variants={staggerContainer}
          >
            {toolsData.map((tool, ind) => (
              <motion.li
                key={ind}
                className=" flex rounded-lg items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 cursor-pointer hover:-translate-y-1 duration-500"
                variants={fadeInUp}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
