import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import FlightDetailPage from "./pages/FlightDetailPage";
import "./style/app.css";
import "./style/flightdetail.css";
import "./style/flightdetailpage.css";
import "./style/flightitem.css";
import "./style/flightlist.css";
import "./style/home.css";
import "./style/searchbar.css";
import "./style/themetoggler.css";
import "./components/InfiniteScroll";

const DARK_THEME_CLASS = "dark-theme";

function setThemePreference(darkModeEnabled) {
  if (darkModeEnabled) {
    document.documentElement.classList.add(DARK_THEME_CLASS);
    localStorage.setItem("theme", DARK_THEME_CLASS);
  } else {
    document.documentElement.classList.remove(DARK_THEME_CLASS);
    localStorage.removeItem("theme");
  }
}

function getThemePreference() {
  return localStorage.getItem("theme") === DARK_THEME_CLASS;
}

function App() {
  const [darkMode, setDarkMode] = useState(getThemePreference());

  useEffect(() => {
    setThemePreference(darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? DARK_THEME_CLASS : ""}`}>
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/flight/:id" component={FlightDetailPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
