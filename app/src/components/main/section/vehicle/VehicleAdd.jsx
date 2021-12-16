import { useContext, useState } from 'react';
import { MainContext } from '../../../../context/MainContext';
import InvalidPage from '../error/InvalidPage';
import VehicleFormEdit from './VehicleFormEdit';

function VehicleAdd() {
  const [, setInfo] = useState(true);
  const [globalcontext] = useContext(MainContext);
  const { logged } = globalcontext;
  if (!logged) {
    return (
      <InvalidPage>
        <h2>You need to be logged to see this page.</h2>
      </InvalidPage>
    );
  }

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
