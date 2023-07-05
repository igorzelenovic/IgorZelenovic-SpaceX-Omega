import React from "react";

import ThemeToggler from "../components/ThemeToggler";
import SearchBar from "../components/SearchBar";
import LogoSpaceX from "../components/LogoSpaceX";

function Home() {
  return (
    <div className="container">
      <ThemeToggler />
      <SearchBar />
      <LogoSpaceX />

      <div className="flight">
        <h1 className="name">Flight 1</h1>
      </div>

      <div className="flight">
        <h1 className="name">Flight 2</h1>
      </div>

      <div className="flight">
        <h1 className="name">Flight 3</h1>
      </div>

      <div className="flight">
        <h1 className="name">Flight 4</h1>
      </div>

      <div className="flight">
        <h1 className="name">Flight 5</h1>
      </div>

      <div className="flight">
        <h1 className="name">Flight 6</h1>
      </div>

      <div className="flight">
        <h1 className="name">Flight 7</h1>
      </div>

      <div className="flight">
        <h1 className="name">Flight 8</h1>
      </div>

      <div className="flight">
        <h1 className="name">Flight 9</h1>
      </div>
    </div>
  );
}

export default Home;

