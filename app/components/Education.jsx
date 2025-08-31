import { assets, educationData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Optimized animations for better performance
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const Education = () => {
  return (
    <motion.div
      id="education"
      className="w-full px-[6%] lg:px-[10%] py-16 scroll-mt-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      {/* Enhanced Header Section */}
      <div className="text-center mb-20">
        <motion.div
          className="inline-block px-6 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4"
          variants={fadeInUp}
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase tracking-wider">
            Academic Journey
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold font-ovo mb-6 text-gray-900 dark:text-white"
          variants={fadeInUp}
        >
          My Educational
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Background
          </span>
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <motion.p
          className="max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300 font-ovo"
          variants={fadeInUp}
        >
          From building a strong foundation at Bagmari Manicktala Govt.
          Sponsored High School to pursuing advanced studies in Information
          Technology at Narula Institute of Technology, each step has shaped my
          journey towards becoming a skilled developer.
        </motion.p>
      </div>

      {/* Redesigned Timeline Layout */}
      <motion.div className="relative" variants={staggerContainer}>
        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

        {educationData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-16 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
          >
            {/* Card Content */}
            <div
              className={`w-full lg:w-5/12 ${
                index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
              }`}
            >
              <motion.div
                className="rounded-2xl shadow-xl p-8 
                hover:shadow-2xl transition-all duration-500 group border border-gray-100 dark:border-gray-700 backdrop-blur-3xl bg-white/50 dark:bg-gray-900/50"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Institution Logo - Much Bigger */}
                <div className="flex items-center justify-center w-full h-full p-2 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl mb-8 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Image
                    src={icon}
                    className="w-full h-full object-contain rounded-2xl"
                    alt={title}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
                    {description}
                  </p>

                  {/* Smaller Learn More Link */}
                  <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 group/link"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span>Learn more</span>
                    <Image
                      src={assets.right_arrow}
                      alt="arrow"
                      className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300"
                    />
                  </motion.a>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 dark:bg-blue-300 rounded-full opacity-60"></div>
              </motion.div>
            </div>

            {/* Timeline Dot (Desktop only) */}
            <div className="hidden lg:flex w-2/12 justify-center">
              <motion.div
                className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg border-4 border-white dark:border-gray-900 z-10"
                whileInView={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              />
            </div>

            {/* Empty Space for Alternate Layout (Desktop only) */}
            <div className="hidden lg:block w-5/12"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats or Achievement Section */}
      <motion.div className="mt-20 text-center" variants={fadeInUp}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              12+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Years of Education
            </div>
          </div>

          <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              B.Tech
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Current Degree
            </div>
          </div>

          <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              IT
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Specialization
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
