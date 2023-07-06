import React from "react";

function FlightDetailPage(props) {
  const { id } = props.match.params; // Dohvaćanje flightId iz ruta
  // Dobijanje detalja leta na osnovu id i prikazivanje tih detalja na stranici

  return (
    <div>
      <h1>Flight Detail Page</h1>
      <p>Flight ID: {id}</p>
      {/* Prikaz ostalih detalja leta */}
    </div>
  );
}

export default FlightDetailPage;
