// Map.jsx
import React from 'react';
import './Map.css';

const Map = () => {
  const rows = 50;
  const cols = 50;

  return (
    <div className="map-container">
      <div className="map">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {Array.from({ length: cols }).map((_, colIndex) => (
              <div key={colIndex} className="tile">
                {rowIndex * cols + colIndex + 1}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;