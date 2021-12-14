import React, { useState } from 'react';
import VehicleData from './VehicleData';
import VehicleFormEdit from './VehicleFormEdit';

const Vehicle = ({ vehicle, id }) => {
  const [info, setInfo] = useState(true);
  const [permission, setPermission] = useState(0);
  return (
    <>
      <div className="card-box-vehicle">
        <div className="img-vehicle">
          <img
            src="img/vehicles/portrait.jpg"
            className="img-style-vehicle"
            alt="vehicle"
          />
        </div>
        {info ? (
          <VehicleData
            vehicle={vehicle}
            setInfo={setInfo}
            id={id}
            setPermission={setPermission}
          />
        ) : permission === id ? (
          <VehicleFormEdit values={vehicle} setInfo={setInfo} />
        ) : (
          <VehicleData
            character={vehicle}
            setInfo={setInfo}
            id={id}
            setPermission={setPermission}
          />
        )}
      </div>
    </>
  );
};

export default Vehicle;
