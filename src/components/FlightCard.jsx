import React from "react";

function FlightCard({ flight }) {
  return (
    <div className="flight">
      <div className="box">
        <div className="flight-image"></div>
        <h1 className="flight-name">{flight.name}</h1>
        <p className="flight-date">{flight.date}</p>
        <p className="flight-description">{flight.description}</p>
        <button className="more-details-button">More Details</button>
      </div>
    </div>
  );
}

export default function FlightList() {
  const flights = [
    { id: 1, name: "Flight 1", date: "Date 1", description: "Description 1" },
    { id: 2, name: "Flight 2", date: "Date 2", description: "Description 2" },
    { id: 3, name: "Flight 3", date: "Date 3", description: "Description 3" },
    { id: 4, name: "Flight 4", date: "Date 4", description: "Description 4" },
    { id: 5, name: "Flight 5", date: "Date 5", description: "Description 5" },
    { id: 6, name: "Flight 6", date: "Date 6", description: "Description 6" },
    { id: 7, name: "Flight 7", date: "Date 7", description: "Description 7" },
    { id: 8, name: "Flight 8", date: "Date 8", description: "Description 8" },
    { id: 9, name: "Flight 9", date: "Date 9", description: "Description 9" },
    { id: 10, name: "Flight 10", date: "Date 10", description: "Description 10" },
    { id: 11, name: "Flight 11", date: "Date 11", description: "Description 11" },
    { id: 12, name: "Flight 12", date: "Date 12", description: "Description 12" },
    { id: 13, name: "Flight 13", date: "Date 13", description: "Description 13" },
    { id: 14, name: "Flight 14", date: "Date 14", description: "Description 14" },
    { id: 15, name: "Flight 15", date: "Date 15", description: "Description 15" },
    { id: 16, name: "Flight 16", date: "Date 16", description: "Description 16" },
    { id: 17, name: "Flight 17", date: "Date 17", description: "Description 17" },
    { id: 18, name: "Flight 18", date: "Date 18", description: "Description 18" },
    { id: 19, name: "Flight 19", date: "Date 19", description: "Description 19" },
    { id: 20, name: "Flight 20", date: "Date 20", description: "Description 20" },
  ];

  return (
    <>
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </>
  );
}
