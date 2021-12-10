import React from 'react';
import planet from './planet.jpg';
const CharacterData = ({ character, setInfo }) => {
  const fnChangeEdit = (setInfo) => {
    setInfo(false);
  };
  return (
    <div className="description-chac">
      <h3>{character.name}</h3>
      <div className="line"></div>
      <ul className="data-list">
        <li>
          <i class="fas fa-jedi"></i> Altura: {character.height}
        </li>
        <li>
          <i class="fas fa-jedi"></i> Masa: {character.mass}
        </li>
        <li>
          <i class="fas fa-jedi"></i> Color del pelo: {character.hair_color}
        </li>
        <li>
          <i class="fas fa-jedi"></i> Color del skin: {character.skin_color}
        </li>
        <li>
          <i class="fas fa-jedi"></i> Color de ojo: {character.eye_color}
        </li>
        <li>
          <i class="fas fa-jedi"></i> Fecha de nacimiento:{' '}
          {character.birth_year}
        </li>
        <li>
          <i class="fas fa-jedi"> </i> Sexo: {character.gender}
        </li>
      </ul>
      <img src={planet} className="img-planet" alt="" />
      <button
        type="button"
        onClick={() => fnChangeEdit(setInfo)}
        class="btn btn-primary btn-edit-chac"
      >
        Editar
      </button>
    </div>
  );
};
export default CharacterData;
