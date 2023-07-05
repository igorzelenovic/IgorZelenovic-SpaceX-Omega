import React, { useState, useEffect } from "react";
import "../style/themetoggler.css";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="input__check"
        checked={darkMode}
        onChange={toggleTheme}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggler;
