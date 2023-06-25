import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-input" placeholder="Search flights" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
