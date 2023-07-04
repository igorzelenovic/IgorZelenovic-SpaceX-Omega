import React, { useEffect, useRef, useState } from 'react';

function InfiniteScroll() {
  const [page, setPage] = useState(0);
  const containerRef = useRef(null);
  const gridContainerRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    function fetchNextData() {
      // Simulate loading the next 9 containers
      setTimeout(() => {
        for (let i = 0; i < 9; i++) {
          const gridItem = document.createElement('div');
          gridItem.classList.add('grid-item');
          gridItem.textContent = `Kontejner ${page * 9 + i + 1}`;
          gridContainerRef.current.appendChild(gridItem);
        }
        loaderRef.current.style.display = 'none'; // Hide the loader after loading
        setPage((prevPage) => prevPage + 1); // Increase the current page number
      }, 1000);
    }

    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.offsetHeight;

      if (scrollTop + windowHeight >= documentHeight - 100) {
        // When reaching the end of the page
        loaderRef.current.style.display = 'block'; // Show the loader
        fetchNextData(); // Load the next data
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  return (
    <div>
      <div ref={containerRef}>
        <div ref={gridContainerRef}></div>
        <div ref={loaderRef}>Loading...</div>
      </div>
    </div>
  );
}

export default InfiniteScroll;
