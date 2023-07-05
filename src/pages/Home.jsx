import React from "react";
import AllCapsules from '../api/capsules/AllCapsules';
import AllCores from '../api/cores/AllCores';
import AllDragons from '../api/dragons/AllDragons';
import AllHistoricalEvents from '../api/history/AllHistoricalEvents';
import CompanyInfo from '../api/info/CompanyInfo';
import AllLandingPads from '../api/landing-pads/AllLandingPads';
import AllLaunchpads from '../api/launch-pads/AllLaunchpads';
import AllLaunches from '../api/launches/AllLaunches';
import AllMissions from '../api/missions/AllMissions';
import AllPayloads from '../api/payloads/AllPayloads';
import Roadster from '../api/roadster/Roadster';
import AllRockets from '../api/rockets/AllRockets';
import AllShips from '../api/ships/AllShips';

import ThemeToggler from "../components/ThemeToggler";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="container">
      <ThemeToggler />
      <SearchBar />

      <div className="flight">
        <h1 className="section-title">Capsules</h1>
        <AllCapsules />
      </div>

      <div className="flight">
        <h1 className="section-title">Cores</h1>
        <AllCores />
      </div>

      <div className="flight">
        <h1 className="section-title">Dragons</h1>
        <AllDragons />
      </div>

      <div className="flight">
        <h1 className="section-title">Historical Events</h1>
        <AllHistoricalEvents />
      </div>

      <div className="flight">
        <h1 className="section-title">Company Info</h1>
        <CompanyInfo />
      </div>

      <div className="flight">
        <h1 className="section-title">Landing Pads</h1>
        <AllLandingPads />
      </div>

      <div className="flight">
        <h1 className="section-title">Launch Pads</h1>
        <AllLaunchpads />
      </div>

      <div className="flight">
        <h1 className="section-title">Launches</h1>
        <AllLaunches />
      </div>

      <div className="flight">
        <h1 className="section-title">Missions</h1>
        <AllMissions />
      </div>

      <div className="flight">
        <h1 className="section-title">Payloads</h1>
        <AllPayloads />
      </div>

      <div className="flight">
        <h1 className="section-title">Roadster</h1>
        <Roadster />
      </div>

      <div className="flight">
        <h1 className="section-title">Rockets</h1>
        <AllRockets />
      </div>

      <div className="flight">
        <h1 className="section-title">Ships</h1>
        <AllShips />
      </div>
    </div>
  );
}

export default Home;
