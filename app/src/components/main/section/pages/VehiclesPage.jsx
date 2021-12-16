import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Toast } from '../../../helpers/sweet-alert';
import { AxiosRequest } from '../../../helpers/axios-request';
import Loader from '../loader/Loader';
import VehicleProfile from '../vehicle/VehicleProfile';
import { MainContext } from '../../../../context/MainContext';

function VehiclesPage() {
  const [globalcontext] = useContext(MainContext);
  const [vehicles, setVehicles] = useState([]);
  const [apiurl, ] = useState('/vehicles/all');
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
        setVehicles(data);
      } catch (error) {
        return Toast('Something bad happen', 'error');
      }
    };
    getData();
  }, [apiurl]);

  return (
    <>
      <div className="container-cards container-card-vehicle">
        {logged && (
          <div className="add-vehicle">
            <Link to="/vehicles/add">
              <i
                className="fas fa-plus-circle fa-3x add-vehicle-icon"
                title="Add a new vehicle"
              ></i>
            </Link>
          </div>
        )}
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
