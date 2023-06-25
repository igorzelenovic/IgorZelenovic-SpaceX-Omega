import React from "react";

const FlightDetailPage = () => {
  return (
    <div className="flight-detail-page">
      <h1 className="page-title">Flight Details</h1>
      <div className="flight-details">
        <h2 className="flight-name">Flight Name</h2>
        <p className="flight-date">Flight Date</p>
        <p className="flight-description">Flight Description</p>
      </div>
      <div className="flight-actions">
        <button className="button">Action 1</button>
        <button className="button">Action 2</button>
      </div>
    </div>
  );
};

export default FlightDetailPage;
