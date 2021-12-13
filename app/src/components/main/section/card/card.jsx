import React from 'react';
import './card.css';

const card = () => {
  return (
    <div className="container-card">
        <h4>Meet our characters</h4>

        <p>Are you ready to meet the most famous characters in the filmographic world and all their characteristics?</p>
        <p>Clicking <a href="http://localhost:3000/characters" target="_blank">here</a> you can discover what we have prepared for you...</p>
    </div>
  );
};

export default card;