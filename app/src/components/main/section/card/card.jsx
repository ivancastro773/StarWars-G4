import React from 'react';
import {Link} from 'react-router-dom';
import './card.css';

const card = () => {
  return (
    <div className="container-card">
        <h4>Meet our characters</h4>

        <p>Are you ready to meet the most famous characters in the filmographic world and all their characteristics?</p>
        <p>Clicking the button below you can discover what we have prepared for you...</p>
        <button><Link to = "characters"> Characters</Link></button>
    </div>
  );
};

export default card;