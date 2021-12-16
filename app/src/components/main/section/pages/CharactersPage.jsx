import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Toast } from '../../../helpers/sweet-alert';
import { AxiosRequest } from '../../../helpers/axios-request';
import CharacterProfile from '../character/CharacterProfile';
import Loader from '../loader/Loader';
import { MainContext } from '../../../../context/MainContext';

function CharactersPage() {
  const [globalcontext] = useContext(MainContext);
  const [characters, setCharacters] = useState([]);
  const [apiurl, ] = useState('/characters/all');
  const { logged } = globalcontext;

  const goToTop = () => window.scrollTo({ top: 80, behavior: 'smooth' });

  const handlePrevPageClick = () => {
    goToTop();
  };

  const handleNextPageClick = () => {
    goToTop();
  };

  useEffect(() => {
    const getData = async (url = apiurl) => {
      try {
        const { status, data, msg } = await AxiosRequest({ url });
        if (status !== 200) {
          return Toast(msg, 'warning');
        }
        setCharacters(data);
      } catch (error) {
        return Toast('Something bad happen', 'error');
      }
    };
    getData();
  }, [apiurl]);

  return (
    <>
      <div className="container-cards container-card-character">
        {logged && (
          <div className="add-character">
            <Link to="/characters/add">
              <i
                className="fas fa-plus-circle fa-3x add-charac-icon"
                title="Add a new character"
              ></i>
            </Link>
          </div>
        )}
        {characters.length === 0 ? (
          <Loader />
        ) : (
          characters.map((character, i) => (
            <CharacterProfile key={i} character={character} />
          ))
        )}
      </div>
      <div className="paginator-container">
        <button
          className="btn-paginator btn-paginator-prev"
          title="Previous Page"
          onClick={handlePrevPageClick}
        >
          Prev
        </button>
        <button
          className="btn-paginator btn-paginator-next"
          title="Next Page"
          onClick={handleNextPageClick}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default CharactersPage;
