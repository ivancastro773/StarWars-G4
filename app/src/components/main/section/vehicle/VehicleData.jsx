import React from 'react';

const VehicleData = ({ vehicle, setInfo }) => {
  const fnChangeEdit = () => {
    setInfo(false);
  };
  return (
    <div className="description-chac animate__animated animate__flipInY">
      <h3>{vehicle.name}</h3>
      <div className="line"></div>
      <ul className="data-list">
        <li>
          <i className="fas fa-jedi"></i> Modelo: {vehicle.model}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Productor: {vehicle.manufacturer}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Costo: {vehicle.cost_in_credits}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Equipo: {vehicle.crew}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Pasajeros: {vehicle.passengers}
        </li>
        <li>
          <i className="fas fa-jedi"></i> Capacidad: {vehicle.cargo_capacity}
        </li>
        <li>
          <i className="fas fa-jedi"> </i> Clase: {vehicle.vehicle_class}
        </li>
      </ul>
      <div className="img-planet-container">
        <img src="/img/vehicles/vehicle2.jpg" className="img-planet" alt="vehicle" />
      </div>
      <button
        type="button"
        className="btn-action start-edit btn-edit-chac"
        onClick={fnChangeEdit}
      >
        Edit
      </button>
    </div>
  );
};

export default VehicleData;
