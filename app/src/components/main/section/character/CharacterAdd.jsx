import React, { useState } from 'react';
//components
import CharacterFormEdit from './CharacterFormEdit';


const CharacterAdd = ({character}) => {
  const [info, setInfo] = useState(true);
  const [addImg,setAddImg] = useState(true);

  const btnAddImage=()=>{
      return(
          <div className='probando'>
              <button>Subir Imagen</button>
          </div>
      )
  }
  return (
    <>
      <div className="container-card-chac-add">
        <div className="card-box-character">
          <div className="img-character">
            {addImg ? btnAddImage() : <img
              src="img/characters/portrait.png"
              className="img-style-chac"
              alt=""
            />}
          </div>
          <CharacterFormEdit setInfo={setInfo} />
        </div>
      </div>
    </>
  );
};
export default CharacterAdd;
