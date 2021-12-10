import React,{useState} from 'react';
import './character.css';
//Sweet Alert
import Swal from 'sweetalert2';
//img
import img from './luke.jpg';
import CharacterData from './CharacterData';
import CharacterFormEdit from './CharacterFormEdit';

const Character = ({ character }) => {
  const [info,setInfo] = useState(true);

  return (
    <>
      <div className="container-card-character">
        <div className="card-box-character">
          <div className="img-character">
            <img src={img} className="img-style-chac" alt="" />
          </div>
          {info ? <CharacterData character={character} setInfo={setInfo}/> : <CharacterFormEdit/>}
        </div>
      </div>
    </>
  );
};

export default Character;
