import Carrousel from './carrousels/Carrousel';
import CarrouselMovies from './carrousels/CarrouselMovies';
import Card from './card/Card';

function Home() {
  return (
    <>
      <Carrousel />
      <CarrouselMovies />
      <Card />
    </>
  );
}

export default Home;
