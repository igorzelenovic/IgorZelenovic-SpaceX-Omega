import React from 'react';
import './ThemeToggler.css';

const ThemeToggler = () => {
  return (
    <div className="theme-toggler">
      <label className="theme-switch">
        <input type="checkbox" className="toggle-checkbox" />
        <span className="toggle-slider"></span>
      </label>
      <span className="theme-label">Toggle Theme</span>
    </div>
  );
};

export default ThemeToggler;
