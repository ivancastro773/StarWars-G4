import React from 'react';
import './character.css';
//img
import img from './luke.jpg';
import planet from './planet.jpg';
const Character = ({ character }) => {
  return (
    <>
      <div className="container-card-character">
        <hr />
        <div className="card-box-character">
          <div className="img-character">
            <img src={img} className="img-style-chac" alt="" />
          </div>
          <div className="description-chac">
            <h3>{character.name}</h3>
            <div className='line'></div>
            <ul className="data-list">
              <li>
                <i class="fas fa-jedi"></i> Altura: {character.height}
              </li>
              <li>
                <i class="fas fa-jedi"></i> Masa: {character.mass}
              </li>
              <li>
                <i class="fas fa-jedi"></i> Color del pelo:{' '}
                {character.hair_color}
              </li>
              <li>
                <i class="fas fa-jedi"></i> Color del skin:{' '}
                {character.skin_color}
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
            <button type="button" class="btn btn-primary btn-edit-chac">
              Editar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
