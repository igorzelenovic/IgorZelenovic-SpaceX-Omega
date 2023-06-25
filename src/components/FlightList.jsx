import React, { useState, useEffect } from 'react';
import './FlightList.css';
import FlightItem from './FlightItem';
import AllFlights from './api/flights/AllFlights';
import './style/InfiniteScroll.css';

const FlightList = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const flightsPerPage = 20;

  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newFlights = await AllFlights.getAllFlights(page, flightsPerPage);
    setFlights((prevFlights) => [...prevFlights, ...newFlights]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollHeight - scrollTop === clientHeight && flights.length % flightsPerPage === 0) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container" onScroll={handleScroll}>
      {flights.map((flight, index) => (
        <FlightItem key={index} flight={flight} />
      ))}
      {loading && <div className="loader">Loading...</div>}
    </div>
  );
};

export default FlightList;
