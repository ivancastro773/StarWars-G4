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
  return (
    <>
      <div className="container-cards container-card-vehicle">
        <div className="card-box-vehicle">
          <div className="img-vehicle">
            <img
              src="/img/vehicles/portrait.jpg"
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
