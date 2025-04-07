import React from 'react';
import '../styles.css';

const Actions = () => {
  return (
    <div className="container-action">
      <div className="text-container-b">
        <button className="action-btn"></button>
        <p style={{ fontFamily: 'Pretendo' }}>B</p>
      </div>
      <div className="text-container">
        <button className="action-btn"></button>
        <p style={{ fontFamily: 'Pretendo' }}>A</p>
      </div>
    </div>
  );
};

export default Actions;
