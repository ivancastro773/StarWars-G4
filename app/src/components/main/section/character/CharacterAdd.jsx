import { useContext, useState } from 'react';
import { MainContext } from '../../../../context/MainContext';
import InvalidPage from '../error/InvalidPage';
import CharacterFormEdit from './CharacterFormEdit';

const CharacterAdd = () => {
  const [, setInfo] = useState(true);
  const [globalcontext] = useContext(MainContext);
  const { logged } = globalcontext;
  if (!logged) {
    return (
      <InvalidPage>
        <h2>You need to be logged to see this page.</h2>
      </InvalidPage>
    );
  }
  return (
    <>
      <div className="container-cards container-card-character">
        <div className="card-box-character">
          <div className="img-character">
            <img
              src="/img/star-wars-logo.jpg"
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
