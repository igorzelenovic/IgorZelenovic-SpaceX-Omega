import { Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import FlightDetailPage from "./pages/FlightDetailPage";
import ErrorBoundary from "./components/ErrorBoundary";

import "./style/app.css";
import "./style/flightdetail.css";
import "./style/flightdetailpage.css";
import "./style/flightitem.css";
import "./style/flightlist.css";
import "./style/home.css";
import "./style/searchbar.css";
import "./style/themetoggler.css";

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

// eslint-disable-next-line
function getThemePreference() {
  return localStorage.getItem("theme") === DARK_THEME_CLASS;
}

export default function App() {
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
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    opacity="1"
                    d="M14 5H20"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    opacity="1"
                    d="M14 8H17"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                    stroke="#000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    opacity="1"
                    d="M22 22L20 20"
                    stroke="#000"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/flight/:id" component={FlightDetailPage} />
    </div>
  );
}

export const Root = () => {
  <Router>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Router>;
};
