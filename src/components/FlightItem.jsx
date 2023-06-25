import React from 'react';
import './FlightItem.css';

const FlightItem = () => {
  return (
    <div className="flight-item">
      <div className="flight-icon"></div>
      <div className="flight-details">
        <div className="flight-name">Flight Name</div>
        <div className="flight-date">Flight Date</div>
      </div>
      <div className="flight-actions">
        <button className="button">Action 1</button>
        <button className="button">Action 2</button>
      </div>
    </div>
  );
};

export default FlightItem;
