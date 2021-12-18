import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="container-card">
      <div>
        <h4>Meet our characters</h4>
        <p>
          Are you ready to meet the most famous characters in the filmographic
          world and all their characteristics?
        </p>
        <p>You can discover what we have prepared for you...</p>
        <Link to="/characters" className="btn-go-to btn-go-to-characters">
          characters
        </Link>
      </div>
    </div>
  );
};

export default Card;
