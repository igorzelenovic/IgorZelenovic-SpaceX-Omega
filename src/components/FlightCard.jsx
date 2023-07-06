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
    {
      id: 1,
      name: "Flight 01",
      date: "Date 01",
      description: "Description 01",
    },
    {
      id: 2,
      name: "Flight 02",
      date: "Date 02",
      description: "Description 02",
    },
    {
      id: 3,
      name: "Flight 03",
      date: "Date 03",
      description: "Description 03",
    },
    {
      id: 4,
      name: "Flight 04",
      date: "Date 04",
      description: "Description 04",
    },
    {
      id: 5,
      name: "Flight 05",
      date: "Date 05",
      description: "Description 05",
    },
    {
      id: 6,
      name: "Flight 06",
      date: "Date 06",
      description: "Description 06",
    },
    {
      id: 7,
      name: "Flight 07",
      date: "Date 07",
      description: "Description 07",
    },
    {
      id: 8,
      name: "Flight 08",
      date: "Date 08",
      description: "Description 08",
    },
    {
      id: 9,
      name: "Flight 09",
      date: "Date 09",
      description: "Description 09",
    },
    {
      id: 10,
      name: "Flight 10",
      date: "Date 10",
      description: "Description 10",
    },
    {
      id: 11,
      name: "Flight 11",
      date: "Date 11",
      description: "Description 11",
    },
    {
      id: 12,
      name: "Flight 12",
      date: "Date 12",
      description: "Description 12",
    },
    {
      id: 13,
      name: "Flight 13",
      date: "Date 13",
      description: "Description 13",
    },
    {
      id: 14,
      name: "Flight 14",
      date: "Date 14",
      description: "Description 14",
    },
    {
      id: 15,
      name: "Flight 15",
      date: "Date 15",
      description: "Description 15",
    },
    {
      id: 16,
      name: "Flight 16",
      date: "Date 16",
      description: "Description 16",
    },
    {
      id: 17,
      name: "Flight 17",
      date: "Date 17",
      description: "Description 17",
    },
    {
      id: 18,
      name: "Flight 18",
      date: "Date 18",
      description: "Description 18",
    },
    {
      id: 19,
      name: "Flight 19",
      date: "Date 19",
      description: "Description 19",
    },
    {
      id: 20,
      name: "Flight 20",
      date: "Date 20",
      description: "Description 20",
    },
  ];

  return (
    <>
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </>
  );
}
