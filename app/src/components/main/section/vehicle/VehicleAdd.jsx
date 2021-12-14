import { useState } from 'react';
import VehicleFormEdit from './VehicleFormEdit';

function VehicleAdd() {
  const [info, setInfo] = useState(true);

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
          <VehicleFormEdit btnAction="add" setInfo={setInfo} />
        </div>
      </div>
    </>
  );
}

export default VehicleAdd;
