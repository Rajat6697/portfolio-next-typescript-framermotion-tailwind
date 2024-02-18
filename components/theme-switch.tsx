"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Props = {};
type ThemeType = "light" | "dark";

const ThemeSwitch = (props: Props) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"; // Determine the new theme
    setTheme(newTheme); // Set the new theme using state setter
    window.localStorage.setItem("theme", newTheme); // Store the new theme in localStorage
  
    // Add or remove the "dark" class from the root HTML element based on the new theme
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  

  useEffect(() => {
    const localTheme =
      (window.localStorage.getItem("theme") as ThemeType) || "light";
    if (localTheme) {
      setTheme(localTheme);
      if(localTheme === "dark"){
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-125 active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsSun className="w-5 h-5 text-gray-700" />
      ) : (
        <BsMoon className="w-5 h-5 text-gray-400" />
      )}
    </button>
  );
};

export default ThemeSwitch;
