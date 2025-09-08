"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

export default function Home() {
  // Initialize with true for default dark mode
  const [isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check localStorage first, if no preference exists, default to dark mode
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "") {
      setDarkMode(true);
    } else if (savedTheme === "light") {
      setDarkMode(false);
    } else {
      // No theme in localStorage, check system preference but prefer dark
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setDarkMode(false);
      } else {
        // Default to dark mode
        setDarkMode(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Education isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
