import React, { useState } from 'react';
//components
import CharacterFormEdit from './CharacterFormEdit';

const CharacterAdd = ({ character }) => {
  const [info, setInfo] = useState(true);

  return (
    <>
      <div className="container-cards container-card-character">
        <div className="card-box-character">
          <div className="img-character">
            <img
              src="img/characters/portrait.png"
              className="img-style-chac"
              alt=""
            />
          </div>
          <CharacterFormEdit setInfo={setInfo} />
        </div>
      </div>
    </>
  );
};
export default CharacterAdd;
