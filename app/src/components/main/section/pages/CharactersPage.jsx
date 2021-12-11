import { useState, useEffect } from 'react';

import { Toast } from '../../../helpers/sweet-alert';
import { AxiosRequest } from '../../../helpers/axios-request';
import Character from '../character/Character';
import Loader from '../loader/Loader';

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [apiurl, setApiUrl] = useState('https://swapi.dev/api/people/?page=1');
  const [prevpage, setPrevpage] = useState('');
  const [nextpage, setNextpage] = useState('');

  const goToTop = () => window.scrollTo({ top: 80, behavior: 'smooth' });

  const handlePrevPageClick = () => {
    goToTop();
    if (prevpage !== null) {
      setApiUrl(prevpage);
    }
  };

  const handleNextPageClick = () => {
    goToTop();
    if (nextpage !== null) {
      setApiUrl(nextpage);
    }
  };

  useEffect(() => {
    const getData = async (url = apiurl) => {
      try {
        const { status, data, msg } = await AxiosRequest({ url });
        if (status !== 200) {
          return Toast(msg, 'warning');
        }
        const { results, previous, next } = data;
        setPrevpage(previous);
        setNextpage(next);
        setCharacters(results);
      } catch (error) {
        return Toast('Something bad happen', 'error');
      }
    };
    getData();
  }, [apiurl]);

  return (
    <>
      <div className="container-cards container-card-character">
        {characters.length === 0 ? (
          <Loader />
        ) : (
          characters.map((character, i) => (
            <Character key={i} character={character} id={i} />
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
