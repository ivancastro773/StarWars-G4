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
  const [loadfail, setLoadFail] = useState(false);
  const [filtervehics, setFilterVehics] = useState([]);
  const [isfiltered, setIsFiltered] = useState(false);
  const [userquery, setUserQuery] = useState({ query: '' });

  const { query } = userquery;
  const { logged } = globalcontext;

  const goToTop = () => window.scrollTo({ top: 80, behavior: 'smooth' });

  const handlePrevPageClick = () => goToTop();

  const handleNextPageClick = () => goToTop();

  const filterElements = (arr, key, query) => {
    return arr.filter((el) =>
      el[key].toLowerCase().includes(query.toLowerCase())
    );
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFiltered(true);
    setFilterVehics(filterElements(vehicles, 'name', query));
  };

  useEffect(() => {
    const getData = async (url) => {
      try {
        const { status, data, msg } = await AxiosRequest({ url });
        if (status !== 200) {
          setLoadFail(true);
          return Toast(msg, 'warning');
        }
        setLoadFail(false);
        setVehicles(data);
      } catch (error) {
        setLoadFail(true);
        return Toast('Something bad happen', 'error');
      }
    };
    getData('/vehicles/all');
  }, []);

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
          <form onSubmit={handleSubmit} className="search-container">
            <input
              type="text"
              name="query"
              id="query"
              placeholder="Search"
              value={query}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn-search">
              Search
            </button>
          </form>
        </div>
        {vehicles.length === 0 ? (
          loadfail ? (
            <h3>No results</h3>
          ) : (
            <Loader />
          )
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
