import React from 'react';
import { useNavigate } from 'react-router-dom';

const CharacterProfile = ({ character }) => {
  const navigate = useNavigate();
  const handleEditCharacter = () => {
    navigate('/characters/edit', {
      state: {
        character: {
          ...character,
        },
      },
    });
  };
  const showImg=(charac)=>{
    if(charac.img ===""){
      return "/img/characters/portrait.png";
    } else{
      return `/img/characters/${character.img}`;
    }
  }
  return (
    <>
      <div className="card-box-character">
        <div className="img-character">
          <img
            src={showImg(character)}
            className="img-style-chac"
            alt="character"
          />
        </div>
        <div className="description-chac animate__animated animate__flipInY">
          <h3>{character.name}</h3>
          <div className="line"></div>
          <ul className="data-list">
            <li>
              <i className="fas fa-jedi"></i> Height: {character.height}
            </li>
            <li>
              <i className="fas fa-jedi"></i> Birth year: {character.birth_year}
            </li>
            <li>
              <i className="fas fa-jedi"> </i> Gender: {character.gender}
            </li>
          </ul>
          <button
            type="button"
            className="btn-action start-edit btn-edit-chac"
            onClick={handleEditCharacter}
          >
            More info
          </button>
        </div>
      </div>
    </>
  );
};

export default CharacterProfile;
