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
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Work = () => {
  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Animates on scroll
      variants={staggerContainer}
    >
      {/* Section Headers */}
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        variants={fadeInUp}
      >
        My Portfolio
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-ovo" variants={fadeInUp}>
        My Latest Work
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-600 dark:text-white/80"
        variants={fadeInUp}
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in development.
      </motion.p>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] my-10 gap-6 dark:text-black"
        variants={staggerContainer}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            variants={fadeInUp}
            whileHover={{ scale: 1.05, rotate: 2 }} // Hover zoom & slight tilt
          >
            {/* Floating Glow Effect */}
            <motion.div
              className="absolute inset-0 w-40 h-40 bg-yellow-400 opacity-20 blur-2xl"
              animate={{ x: [0, 100, -100, 0], y: [0, 50, -50, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Project Info Box */}
            <motion.div
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg"
              whileHover={{ scale: 1.1 }} // Subtle pop effect
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>

              {/* Button Animation */}
              <motion.div
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                whileHover={{ scale: 1.2 }} // Button pops up
              >
                <Link href={project.link} target="blank">
                  <Image src={assets.send_icon} alt="arrow icon" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
