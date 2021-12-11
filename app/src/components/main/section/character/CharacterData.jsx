import React from 'react';

const CharacterData = ({ character, setPermission, setInfo, id }) => {
  const fnChangeEdit = (e) => {
    const { target } = e;
    const { dataset } = target;
    const { identify } = dataset;
    setPermission(Number(identify));
    setInfo(false);
  };
  return (
    <div className="description-chac animate__animated animate__flipInY">
      <h3>{character.name}</h3>
      <div className="line"></div>
      <ul className="data-list">
        <li>
          <i className="fas fa-jedi"></i> Altura: {character.height}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Masa: {character.mass}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Color del pelo: {character.hair_color}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Color del skin: {character.skin_color}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Color de ojo: {character.eye_color}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Fecha de nacimiento:{' '}
          {character.birth_year}
        </li>
        <li>
          <i className="fas fa-jedi"> </i> Sexo: {character.gender}
        </li>
      </ul>
      <img src="img/planet.jpg" className="img-planet" alt="planet" />
      <button
        type="button"
        className="btn-action start-edit btn-edit-chac"
        value={id}
        data-identify={id}
        onClick={fnChangeEdit}
      >
        Editar
      </button>
    </div>
  );
};

export default CharacterData;
