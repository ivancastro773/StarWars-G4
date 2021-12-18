import React from 'react';
import { Link } from 'react-router-dom';
import { charactersGallery } from '../../../../mocks/images-carrousel';

const CharactersCard = () => {
  const characters = charactersGallery();
  return (
    <div className="container-card">
      <div className="characters-presentation">
        <h4>
          Discover some of the <Link to="characters">characters</Link>
        </h4>
        <p>
          Are you ready to meet the most famous characters in the filmographic
          world and all their characteristics?
        </p>
        <p>You can discover what we have prepared for you...</p>
      </div>
      <div className="characters-preview">
        {characters.map((character, i) => (
          <div key={i} className="img-container-preview">
            <img
              className="img-preview"
              src={character.src}
              alt={character.alt}
            />
            <div className="shadow-text">
              <p>{character.title.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersCard;
