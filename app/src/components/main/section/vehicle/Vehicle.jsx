import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import InvalidPage from '../error/InvalidPage';

import VehicleData from './VehicleData';
import VehicleFormEdit from './VehicleFormEdit';

const Vehicle = () => {
  const [info, setInfo] = useState(true);
  const { state } = useLocation();
  if (!state) {
    return <InvalidPage />;
  }
  const { vehicle = {} } = state;
  const showImg = (vehicle) => {
    if (vehicle.img === '' || vehicle.img === null) {
      return '/img/star-wars-logo.jpg';
    } else {
      return `/img/vehicles/${vehicle.img}`;
    }
  };
  return (
    <>
      <div className="container-cards container-card-vehicle">
        <div className="card-box-vehicle">
          <div className="img-vehicle">
            <img
              src={showImg(vehicle)}
              className="img-style-vehicle"
              alt="vehicle"
            />
          </div>
          {info ? (
            <VehicleData vehicle={vehicle} setInfo={setInfo} />
          ) : (
            <VehicleFormEdit vehicle={vehicle} setInfo={setInfo} />
          )}
        </div>
      </div>
    </>
  );
};

export default Vehicle;
