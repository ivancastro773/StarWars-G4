import { useState } from 'react';
import CharacterFormEdit from './CharacterFormEdit';

const CharacterAdd = () => {
  const [info, setInfo] = useState(true);

  return (
    <>
      <div className="container-cards container-card-character">
        <div className="card-box-character">
          <div className="img-character">
            <img
              src="/img/characters/portrait.png"
              className="img-style-chac"
              alt=""
            />
          </div>
          <CharacterFormEdit btnAction="add" setInfo={setInfo} />
        </div>
      </div>
    </>
  );
};
export default CharacterAdd;
