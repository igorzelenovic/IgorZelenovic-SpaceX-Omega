import React, { useState } from "react";
import "./ThemeToggler.css";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Ovde možete dodati logiku za promenu teme, na primer primenu odgovarajućih CSS klasa na elemente aplikacije
    // Možete koristiti "darkMode" vrednost za dinamičku promenu teme
  };

  return (
    <label className={`switch ${darkMode ? "dark-mode" : ""}`}>
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
