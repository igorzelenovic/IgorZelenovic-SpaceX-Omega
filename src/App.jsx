import { Routes, Route } from "react-router-dom";
import "./style/app.css";

import Home from "./pages/Home";
import "./style/home.css";

import FlightDetailPage from "./pages/FlightDetailPage";
import "./style/flightdetailpage.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight/:id" element={<FlightDetailPage />} />
    </Routes>
  );
}
