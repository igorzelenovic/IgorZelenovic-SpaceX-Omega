import React from "react";
import FlightItem from "../components/FlightItem";
import ThemeToggler from "../components/ThemeToggler";
import SearchBar from "../components/SearchBar";
import LogoSpaceX from "../components/LogoSpaceX";

function Home() {
  return (
    <div className="container">
      <ThemeToggler />
      <SearchBar />
      <LogoSpaceX />
      <FlightItem />
    </div>
  );
}

export default Home;
