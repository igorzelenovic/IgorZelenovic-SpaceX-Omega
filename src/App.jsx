import { Routes, Route } from "react-router-dom";

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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight/:id" element={<FlightDetailPage />} />
    </Routes>
  );
}
