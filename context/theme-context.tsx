"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextProviderProps = {
    children : React.ReactNode;
}
type ThemeType = "light" | "dark";

type ThemeContextType = {
    theme : ThemeType,
    toggleTheme : ()=> void
}

const ThemeContext = createContext<ThemeContextType | null>(null);


const ThemeContextProvider = ({children} : ThemeContextProviderProps) => {
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
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider


export function useTheme() {
    const context = useContext(ThemeContext);
    if(context === null){
        throw new Error("useTheme must be used within a ThemeContextProvider")
    }
    else return context
}