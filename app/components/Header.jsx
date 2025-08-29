import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const fadeIn = (direction, delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
    y: direction === "up" ? -20 : direction === "down" ? 20 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

const Header = ({ isDarkMode }) => {
  return (
    <motion.div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      {/* <motion.div variants={scaleIn(0.2)}>
        <Image
          src={isDarkMode ? assets.profile_img_dark : assets.profile_img}
          alt=""
          className="rounded-full w-32"
        />
      </motion.div> */}

      <motion.h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
        variants={fadeIn("up", 0.3)}
      >
        Hello! I'm Surya Sekhar Sharma
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      <motion.h1
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo  overflow-y-hidden"
        variants={fadeIn("left", 0.4)}
      >
        Full Stack Web Developer in India.
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto font-ovo"
        variants={fadeIn("right", 0.5)}
      >
        Passionate about building scalable and efficient web applications. Let's
        connect and create something amazing together! Feel free to reach out
        for collaborations or projects.{" "}
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
          variants={scaleIn(0.6)}
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
          href="/sample-resume.pdf"
          download
          variants={scaleIn(0.7)}
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Header;
