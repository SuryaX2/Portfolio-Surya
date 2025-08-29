import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "cbb9eea7-a636-4450-808c-a60dd42f0568");

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
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Connect with me
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-ovo  overflow-y-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I’d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
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
                required
                className="peer p-3 w-full outline-none border border-gray-400 rounded-md bg-white dark:bg-[var(--darkHover)]/30 dark:border-white/90"
              />
              <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white">
                {field}
              </label>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <textarea
            rows="6"
            name="Message"
            required
            className="peer w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6 dark:bg-[var(--darkHover)]/30 dark:border-white/90"
          ></textarea>
          <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white">
            Enter your message
          </label>
        </motion.div>

        <motion.button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:scale-105 active:scale-95 transition-transform duration-300 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-[var(--darkHover)] cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        <p className="mt-4 text-center">{result}</p>
      </form>
    </motion.div>
  );
};

export default Contact;
