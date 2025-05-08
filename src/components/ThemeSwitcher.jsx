import React, { useState, useEffect } from "react";
import "../styles/home.css";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light"); 

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); 
  };

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
