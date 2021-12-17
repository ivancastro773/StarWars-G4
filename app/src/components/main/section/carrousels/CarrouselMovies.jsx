import { useState } from 'react';
import { imagesCarrouselTwo } from '../../../../mocks/images-carrousel';

function CarrouselMovies() {
  const [index, setIndex] = useState(0);
  let images = imagesCarrouselTwo();
  images = images.map((el) => ({ ...el, title: el.title.toUpperCase() }));
  const imagesLen = images.length - 1;

  const handlePrevMovie = () => {
    if (index === 0) {
      setIndex(imagesLen);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };

  const handleNextMovie = () => {
    if (index === imagesLen) {
      setIndex(0);
    } else {
      setIndex((prevState) => prevState + 1);
    }
  };

  return (
    <section className="movies-gallery">
      <div className="card movie-card-container">
        <div className="row g-0 movie-info-container">
          <div className="col-md-5 col-sm-5 movie-image">
            <img
              src={images[index].src}
              className="img-fluid rounded-start"
              alt={images[index].alt}
            />
          </div>
          <div className="col-md-7 col-sm-7 movie-info">
            <div className="card-body">
              <h5 className="card-title">{images[index].title}</h5>
              <p className="card-text">{images[index].description}</p>
              <p className="card-text">
                <small className="text-muted release-date">
                  Release date: <span>{images[index].release}</span>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="movie-slider-prev"
        title={index === 0 ? images[imagesLen].title : images[index - 1].title}
        onClick={handlePrevMovie}
      >
        &#10094;
      </button>
      <button
        className="movie-slider-next"
        title={index === imagesLen ? images[0].title : images[index + 1].title}
        onClick={handleNextMovie}
      >
        &#10095;
      </button>
    </section>
  );
}

export default CarrouselMovies;
