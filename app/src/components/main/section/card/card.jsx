import React from 'react';
import {Link} from 'react-router-dom';
import './card.css';

const card = () => {
  return (
    <div className="container-card">
        <h4>Meet our characters</h4>

        <p>Are you ready to meet the most famous characters in the filmographic world and all their characteristics?</p>
        <p>Clicking <button><Link to = "characters"> here</Link></button> you can discover what we have prepared for you...</p>
    </div>
  );
};

export default card;