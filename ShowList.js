// ShowList.js

import React, { useState, useEffect } from 'react';

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleShowDetails = (show) => {
    setSelectedShow(show);
  };

  return (
    <div className="container">
      <div className="show-buttons">
        {shows.map((show) => (
          <button
            key={show.show.id}
            onClick={() => handleShowDetails(show.show)}
            style={{ backgroundColor: show.show.id % 2 === 0 ? '#3498db' : '#e74c3c' }}
          >
            {show.show.name}
          </button>
        ))}
      </div>

      <div className="show-details">
        {selectedShow && (
          <div>
            <h2>{selectedShow.name}</h2>
            <p>{selectedShow.summary}</p>
            {/* Add more details as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowList;
