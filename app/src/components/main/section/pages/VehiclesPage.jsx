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
  const [apiurl] = useState('/vehicles/all');

  const [filtervehics, setFilterVehics] = useState([]);
  const [isfiltered, setIsFiltered] = useState(false);
  const [userquery, setUserQuery] = useState({ query: '' });
  const { query } = userquery;

  const { logged } = globalcontext;

  const goToTop = () => window.scrollTo({ top: 80, behavior: 'smooth' });

  const handlePrevPageClick = () => goToTop();

  const handleNextPageClick = () => goToTop();

  const handleInputChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setUserQuery((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSearch = () => {
    setIsFiltered(true);
    const vehics = vehicles.filter((vehicle) =>
      vehicle.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilterVehics(vehics);
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
        <div className="add-vehicle">
          {logged && (
            <Link to="/vehicles/add">
              <i
                className="fas fa-plus-circle fa-3x add-vehicle-icon"
                title="Add a new vehicle"
              ></i>
            </Link>
          )}
          <div className="search-container">
            <input
              type="text"
              name="query"
              id="query"
              placeholder="Search"
              value={query}
              onChange={handleInputChange}
            />
            <button type="button" className="btn-search" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        {vehicles.length === 0 ? (
          <Loader />
        ) : !isfiltered ? (
          vehicles.map((vehicle, i) => (
            <VehicleProfile key={i} vehicle={vehicle} />
          ))
        ) : filtervehics.length === 0 ? (
          <h3>No results</h3>
        ) : (
          filtervehics.map((vehicle, i) => (
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
