import React from 'react';
import { Link } from 'react-router-dom';
import { vehiclesGallery } from '../../../../mocks/images-carrousel';

const VehiclesCard = () => {
  const vehicles = vehiclesGallery();
  return (
    <div className="container-card">
      <div className="vehicles-preview">
        {vehicles.map((vehicle, i) => (
          <div key={i} className="img-container-preview">
            <img
              className="img-preview"
              src={vehicle.src}
              alt={vehicle.alt}
            />
            <div className="shadow-text">
              <p>{vehicle.title.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="vehicles-presentation">
        <h4>
          Discover some of the <Link to="vehicles">vehicles</Link>
        </h4>
        <p>
          Watch some of the most famous vehicles and all their characteristics
        </p>
        <p>Take a look...</p>
      </div>
    </div>
  );
};

export default VehiclesCard;
