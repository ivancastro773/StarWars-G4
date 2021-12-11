import { useState, useEffect } from 'react';
import axios from 'axios';

import Character from '../character/Character';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [apiurl, setApiUrl] = useState('https://swapi.dev/api/people/?page=1');
  const [prevpage, setPrevpage] = useState('');
  const [nextpage, setNextpage] = useState('');

  const handlePrevPageClick = () => {
    window.scrollTo({
      top: 80,
      behavior: 'smooth',
    });
    if (prevpage !== null) {
      setApiUrl(prevpage);
    }
  };

  const handleNextPageClick = () => {
    window.scrollTo({
      top: 80,
      behavior: 'smooth',
    });
    if (nextpage !== null) {
      setApiUrl(nextpage);
    }
  };

  useEffect(() => {
    const getData = (url = apiurl) => {
      axios
        .get(url)
        .then((res) => {
          const { data } = res;
          const { results, previous, next } = data;
          setPrevpage(previous);
          setNextpage(next);
          setCharacters(results);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, [apiurl]);

  return (
    <>
      <div className="container-cards container-card-character">
        {characters.length === 0 ? (
          <div className="characters-loader">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
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

export default Characters;
