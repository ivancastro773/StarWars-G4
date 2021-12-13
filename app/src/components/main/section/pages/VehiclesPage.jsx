import { useState, useEffect } from 'react';

import { Toast } from '../../../helpers/sweet-alert';
import { AxiosRequest } from '../../../helpers/axios-request';
import Vehicle from '../vehicle/Vehicle';
import Loader from '../loader/Loader';

function VehiclesPage() {
  const [vehicles, setVehicles] = useState([]);
  const [apiurl, setApiUrl] = useState('https://swapi.dev/api/vehicles/?page=1');
  const [prevpage, setPrevpage] = useState('');
  const [nextpage, setNextpage] = useState('');

  const goToTop = () => window.scrollTo({ top: 80, behavior: 'smooth' });

  const handlePrevPageClick = () => {
    if (prevpage !== null) {
      goToTop();
      setApiUrl(prevpage);
    }
  };

  const handleNextPageClick = () => {
    if (nextpage !== null) {
      goToTop();
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
        setVehicles(results);
      } catch (error) {
        return Toast('Something bad happen', 'error');
      }
    };
    getData();
  }, [apiurl]);

  return (
    <>
      <div className="container-cards container-card-vehicle">
        {vehicles.length === 0 ? (
          <Loader />
        ) : (
          vehicles.map((vehicle, i) => (
            <Vehicle key={i} vehicle={vehicle} id={i} />
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

export default VehiclesPage;
