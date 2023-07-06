import React, { useEffect, useRef, useState } from 'react';
import './infinite-scroll.css';

function InfiniteScrollList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    function handleScroll() {
      const container = containerRef.current;
      const { scrollTop, clientHeight, scrollHeight } = container;

      if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
        fetchNextPage();
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      // Simulate API call to fetch data for the initial page
      const response = await fetch(`your-api-url?page=${page}&limit=20`);
      const newData = await response.json();

      setData(newData);
      setPage(page + 1);
    } catch (error) {
      console.log('Error fetching data:', error);
    }

    setIsLoading(false);
  };

  const fetchNextPage = async () => {
    setIsLoading(true);

    try {
      // Simulate API call to fetch data for the next page
      const response = await fetch(`your-api-url?page=${page}&limit=20`);
      const newData = await response.json();

      setData((prevData) => [...prevData, ...newData]);
      setPage(page + 1);
    } catch (error) {
      console.log('Error fetching data:', error);
    }

    setIsLoading(false);
  };

  return (
    <div className="infinite-scroll-container" ref={containerRef}>
      {data.map((item, index) => (
        <div key={index} className="item">
          {/* Render item content here */}
        </div>
      ))}
      {isLoading && <div className="loading-message">Loading...</div>}
    </div>
  );
}

export default InfiniteScrollList;
