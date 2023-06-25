import React from 'react';
import './FlightDetail.css';

const FlightDetail = () => {
  return (
    <div className="flight-detail">
      <div className="flight-info">
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

export default FlightDetail;

