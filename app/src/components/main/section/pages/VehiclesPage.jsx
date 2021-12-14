import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Toast } from '../../../helpers/sweet-alert';
import { AxiosRequest } from '../../../helpers/axios-request';
import Loader from '../loader/Loader';
import VehicleProfile from '../vehicle/VehicleProfile';

function VehiclesPage() {
  const [vehicles, setVehicles] = useState([]);
  const [apiurl, setApiUrl] = useState(
    'https://swapi.py4e.com/api/vehicles/?page=1'
  );
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
        <div className="add-vehicle">
          <Link to="/vehicle-add">
            <i
              className="fas fa-plus-circle fa-3x add-vehicle-icon"
              title="Add a new vehicle"
            ></i>
          </Link>
        </div>
        {vehicles.length === 0 ? (
          <Loader />
        ) : (
          vehicles.map((vehicle, i) => (
            <VehicleProfile key={i} vehicle={vehicle} />
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
