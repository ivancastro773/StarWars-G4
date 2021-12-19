import React, { useContext } from 'react';
import { MainContext } from '../../../../context/MainContext';
import { Toast } from '../../../helpers/sweet-alert';

const CharacterData = ({ character, setInfo }) => {
  const [globalcontext] = useContext(MainContext);
  const { logged } = globalcontext;
  const fnChangeEdit = () => {
    if (!logged) {
      return Toast('You need to be logged', 'error');
    }
    setInfo(false);
  };
  return (
    <div className="description-chac animate__animated animate__flipInY">
      <h3>{character.name}</h3>
      <div className="line"></div>
      <ul className="data-list">
        <li>
          <i className="fas fa-jedi"></i> Height: {character.height}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Mass: {character.mass}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Hair color: {character.hair_color}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Skin color: {character.skin_color}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Eye color: {character.eye_color}
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
        onClick={fnChangeEdit}
      >
        Edit
      </button>
    </div>
  );
};

export default CharacterData;
