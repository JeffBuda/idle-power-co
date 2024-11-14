// ButtonBar.jsx
import React from 'react';
import './ButtonBar.css';

const ButtonBar = () => {
  return (
    <div className="button-bar">
      <button className="action-button">Action</button>
      <div className="menu-bar">
        {/* Add menu items here */}
        <button className="menu-item">Menu 1</button>
        <button className="menu-item">Menu 2</button>
        <button className="menu-item">Menu 3</button>
      </div>
    </div>
  );
};

export default ButtonBar;