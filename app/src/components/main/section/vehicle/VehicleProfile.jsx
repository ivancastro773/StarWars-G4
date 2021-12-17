import { useNavigate } from 'react-router-dom';

function VehicleProfile({ vehicle }) {
  const navigate = useNavigate();
  const handleEditVehicle = () => {
    navigate('/vehicles/edit', {
      state: {
        vehicle: {
          ...vehicle,
        },
      },
    });
  };
  const showImg = (vehicle) => {
    if (vehicle.img === '' || vehicle.img === null) {
      return '/img/star-wars-logo.jpg';
    } else {
      return `/img/vehicles/${vehicle.img}`;
    }
  };
  return (
    <div className="card-box-vehicle">
      <div className="img-vehicle">
        <img
          src={showImg(vehicle)}
          className="img-style-vehicle"
          alt="vehicle"
        />
      </div>
      <div className="description-chac animate__animated animate__flipInY">
        <h3>{vehicle.name}</h3>
        <div className="line"></div>
        <ul className="data-list">
          <li>
            <i className="fas fa-jedi"></i> Model: {vehicle.model}
          </li>
          <li>
            <i className="fas fa-jedi"> </i> Class: {vehicle.vehicle_class}
          </li>
        </ul>
        <button
          type="button"
          className="btn-action start-edit btn-edit-chac"
          onClick={handleEditVehicle}
        >
          More info
        </button>
      </div>
    </div>
  );
}

export default VehicleProfile;
