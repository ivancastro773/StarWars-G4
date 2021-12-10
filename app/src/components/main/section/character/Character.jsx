import React from 'react';
import './character.css';
const Character = () => {
  return (
    <>
      <div className="container-cards-character">
        <div>
          <div>
            <div className="card-character">
              <div className="text-character">
                <h3 className="title-character">Luke Skywalker</h3>
                <ul className="text-description">
                  <li>altura</li>
                  <li>masa</li>
                </ul>
                <p className="title-character">planeta</p>
              </div>
            </div>
          </div>
          <div>
            <button className="btn-edit-character">EDITAR</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
