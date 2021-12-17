import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import InvalidPage from '../error/InvalidPage';

import CharacterData from './CharacterData';
import CharacterFormEdit from './CharacterFormEdit';

const Character = () => {
  const [info, setInfo] = useState(true);
  const { state } = useLocation();
  if (!state) {
    return <InvalidPage />;
  }
  const { character = {} } = state;
  const showImg = (charac) => {
    if (charac.img === '' || charac.img === null) {
      return '/img/star-wars-logo.jpg';
    } else {
      return `/img/characters/${character.img}`;
    }
  };
  return (
    <>
      <div className="container-cards container-card-character">
        <div className="card-box-character">
          <div className="img-character">
            <img
              src={showImg(character)}
              className="img-style-chac"
              alt="character"
            />
          </div>
          {info ? (
            <CharacterData character={character} setInfo={setInfo} />
          ) : (
            <CharacterFormEdit character={character} setInfo={setInfo} />
          )}
        </div>
      </div>
    </>
  );
};

export default Character;
