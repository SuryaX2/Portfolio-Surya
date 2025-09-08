import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  // Add state to track form values
  const [formValues, setFormValues] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "875de2f7-f1d5-4cd5-bf82-f69232ffba0f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setTimeout(() => {
        setResult("");
        event.target.reset();
        // Reset form state
        setFormValues({ Name: "", Email: "", Message: "" });
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // Animation variants matching your other components
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <motion.div
      id="contact"
      className="px-[12%] py-20 scroll-mt-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Background Elements - Consistent with About component */}
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

      {/* Header Section - Matching other components' style */}
      <div className="text-center mb-16">
        <motion.h4
          className="text-lg font-ovo text-blue-600 dark:text-blue-400 mb-2"
          variants={fadeInUp}
        >
          Connect with me
        </motion.h4>
        <motion.h2
          className="text-5xl lg:text-6xl font-ovo font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
          variants={fadeInUp}
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.p
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-700 dark:text-gray-300"
          variants={fadeInUp}
        >
          I'd love to hear from you! Whether you have a project in mind, want to
          collaborate, or just want to say hello, feel free to reach out.
        </motion.p>
      </div>

      {/* Main Content Grid - Similar to About component layout */}
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
        {/* Left Side - Contact Information */}
        <motion.div
          className="relative flex flex-col justify-center"
          variants={fadeInLeft}
        >
          {/* Decorative Background Elements - Similar to About component */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl blur-2xl transform rotate-6 opacity-30"
            animate={{
              rotate: [6, -3, 6],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 space-y-8">
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 cursor-pointer transition-all duration-300"
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
                  src={assets.mail_icon}
                  alt="Email"
                  className="w-6 h-6 filter brightness-0 invert"
                />
              </motion.div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">
                Email Me
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                sekharsurya111@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Send me an email and I'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 cursor-pointer transition-all duration-300"
              variants={fadeInUp}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <motion.div
                className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-xl">💬</span>
              </motion.div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">
                Let's Chat
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                Quick Response
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                I'm always excited to discuss new opportunities and projects.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 cursor-pointer transition-all duration-300"
              variants={fadeInUp}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <motion.div
                className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-xl">🚀</span>
              </motion.div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">
                Collaboration
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                Open to Projects
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Ready to bring your ideas to life with cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div className="space-y-8" variants={fadeInRight}>
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Form Fields Grid - Fixed floating labels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Name", "Email"].map((field, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <input
                    type={field === "Email" ? "email" : "text"}
                    name={field}
                    value={formValues[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    required
                    className="p-4 w-full outline-none border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 transition-all duration-300 focus:border-blue-500 dark:focus:border-blue-400 focus:shadow-lg focus:shadow-blue-500/20"
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 bg-white dark:bg-gray-800 px-2 rounded pointer-events-none ${
                      formValues[field]
                        ? "top-1 text-sm text-blue-600 dark:text-blue-400 font-semibold"
                        : "top-4 text-base text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {field}
                  </label>
                </motion.div>
              ))}
            </div>

            {/* Message Field - Fixed floating label */}
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <textarea
                rows="16"
                name="Message"
                value={formValues.Message}
                onChange={(e) => handleInputChange("Message", e.target.value)}
                required
                className="peer w-full p-4 outline-none border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 transition-all duration-300 focus:border-blue-500 dark:focus:border-blue-400 focus:shadow-lg focus:shadow-blue-500/20 resize-none"
                placeholder=" "
              />
              <label
                className={`absolute left-4 transition-all duration-300 bg-white dark:bg-gray-800 px-2 rounded pointer-events-none ${
                  formValues.Message
                    ? "top-1 text-sm text-blue-600 dark:text-blue-400 font-semibold"
                    : "top-4 text-base text-gray-500 dark:text-gray-400"
                }`}
              >
                Enter your message
              </label>
            </motion.div>

            {/* Submit Button - Consistent with other components */}
            <motion.button
              type="submit"
              className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:scale-105 active:scale-95 transition-transform duration-300 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-gray-800 cursor-pointer shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <span className="font-medium">Send Message</span>
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </motion.button>

            {/* Result Message */}
            {result && (
              <motion.p
                className="text-center mt-4 font-ovo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span
                  className={`${
                    result.includes("Successfully")
                      ? "text-green-600 dark:text-green-400"
                      : result.includes("Sending")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-red-600 dark:text-red-400"
                  } font-medium`}
                >
                  {result}
                </span>
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Social Links Section - Matching the style of other components */}
      <motion.div className="text-center" variants={fadeInUp}>
        <motion.h3
          className="text-2xl font-ovo font-bold text-gray-800 dark:text-white mb-6"
          variants={fadeInUp}
        >
          Find me on social platforms
        </motion.h3>

        <motion.div
          className="flex justify-center gap-6"
          variants={staggerContainer}
        >
          {[
            {
              name: "GitHub",
              link: "https://github.com/SuryaX2",
              icon: assets.github_icon || "🐙",
              color: "from-gray-600 to-gray-800",
            },
            {
              name: "LinkedIn",
              link: "www.linkedin.com/in/suryax2",
              icon: assets.twitter_icon || "🐦",
              color: "from-blue-400 to-blue-600",
            },
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              className={`group px-6 py-3 bg-gradient-to-r ${social.color} text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3`}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">
                {typeof social.icon === "string" && social.icon.includes("�")
                  ? social.icon
                  : "🔗"}
              </span>
              <span>{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
