import React from "react";
import FlightCard from "../components/FlightCard";
import ThemeToggler from "../components/ThemeToggler";
import SearchBar from "../components/SearchBar";
import LogoSpaceX from "../components/LogoSpaceX";

function Home() {
  return (
    <div className="container">
      <ThemeToggler />
      <SearchBar />
      <LogoSpaceX />
      <FlightCard />
    </div>
  );
}

export default Home;
