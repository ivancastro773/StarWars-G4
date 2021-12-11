import React, { useState } from 'react';
import './character.css';
import CharacterData from './CharacterData';
import CharacterFormEdit from './CharacterFormEdit';

const Character = ({ character, id }) => {
  const [info, setInfo] = useState(true);
  const [permission, setPermission] = useState(0);
  return (
    <>
      <div key={id} className="card-box-character">
        <div className="img-character">
          <img
            src="img/characters/portrait.png"
            className="img-style-chac"
            alt="character"
          />
        </div>
        {info ? (
          <CharacterData
            character={character}
            setInfo={setInfo}
            id={id}
            setPermission={setPermission}
          />
        ) : permission === id ? (
          <CharacterFormEdit values={character} setInfo={setInfo} />
        ) : (
          <CharacterData
            character={character}
            setInfo={setInfo}
            id={id}
            setPermission={setPermission}
          />
        )}
      </div>
    </>
  );
};

export default Character;
