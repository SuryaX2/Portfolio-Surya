import { assets, infoList, toolsData } from "@/assets/assets";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const About = ({ isDarkMode }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,119,198,0.3),_transparent_50%),radial-gradient(circle_at_40%_40%,_rgba(120,219,255,0.3),_transparent_50%)] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300 font-medium text-lg backdrop-blur-sm">
              ABOUT ME
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <span className="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              CREATIVE
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-white bg-clip-text text-transparent">
              DEVELOPER
            </span>
          </motion.h1>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          
          {/* Left - Content */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Story */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white mb-6">
                Building Digital
                <span className="block text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                  Experiences
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> who transforms ideas into captivating digital realities. Currently pursuing my studies while building cutting-edge web applications that push the boundaries of user experience.
                </p>
                <p>
                  My journey revolves around creating <span className="text-cyan-400 font-semibold">innovative solutions</span> that not only look stunning but deliver exceptional performance and accessibility across all platforms.
                </p>
              </div>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { number: "20+", label: "Projects" },
                { number: "15+", label: "Technologies" },
                { number: "100%", label: "Dedication" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div 
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Image & Visual */}
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Glowing Background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Main Image */}
            <motion.div 
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={assets.aboutme}
                alt="Surya Sekhar Sharma"
                className="w-full h-full object-cover"
                priority
              />
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10" />
            </motion.div>
            
            {/* Orbiting Elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                }}
                animate={{
                  rotate: [0, 360],
                  x: [0, Math.cos(i * 120 * Math.PI / 180) * 200, 0],
                  y: [0, Math.sin(i * 120 * Math.PI / 180) * 200, 0],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Skills Cards */}
        <motion.div 
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-center mb-16">
            <span className="text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text">
              What I Do
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)"
                }}
                viewport={{ once: true }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-500" />
                
                <motion.div 
                  className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </motion.div>
                
                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {title}
                </h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack - Redesigned */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-white to-cyan-400 bg-clip-text">
                TECH ARSENAL
              </span>
            </h3>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Cutting-edge tools and technologies I wield to craft digital masterpieces
            </p>
          </div>

          {/* 3D Carousel Effect */}
          <div className="relative perspective-1000 h-80 overflow-hidden">
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ y }}
            >
              <div className="flex space-x-8 animate-spin-slow">
                {toolsData.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center group cursor-pointer"
                    style={{
                      transform: `rotateY(${index * (360 / toolsData.length)}deg) translateZ(200px)`,
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotateY: 180,
                      boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src={tool}
                      alt="Technology"
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center pt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Create Something Amazing
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default About;