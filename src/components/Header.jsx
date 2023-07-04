import { useEffect, useState } from "react";

const DARK_THEME_CLASS = "dark-theme";

function setThemePreference(darkModeEnabled) {
  if (darkModeEnabled) {
    document.body.classList.add(DARK_THEME_CLASS);
    localStorage.setItem("theme", DARK_THEME_CLASS);
  } else {
    document.body.classList.remove(DARK_THEME_CLASS);
    localStorage.removeItem("theme");
  }
}

function getThemePreference() {
  return localStorage.getItem("theme") === DARK_THEME_CLASS;
}

const Header = () => {
  const [darkMode, setDarkMode] = useState(getThemePreference());

  useEffect(() => {
    setThemePreference(darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? `App ${DARK_THEME_CLASS}` : "App"}>
      <header>
        <div className="theme-toggler">
          <label className="switch">
            <input
              type="checkbox"
              className="input__check"
              checked={darkMode}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
          </label>
          <span className="theme-label"></span>
        </div>
        <div className="search-bar">
          <div className="input-container">
            <input
              type="text"
              name="text"
              className="input"
              placeholder="search..."
            />
            <span className="icon">
              <svg
                width="19px"
                height="19px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths omitted for brevity */}
              </svg>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
