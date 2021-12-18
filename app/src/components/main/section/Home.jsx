import Carrousel from './carrousels/Carrousel';
import CarrouselMovies from './carrousels/CarrouselMovies';
import CharactersCard from './card/CharactersCard';
import VehiclesCard from './card/VehiclesCard';
import Separator from './separator/Separator';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Carrousel />
      <CarrouselMovies />
      <CharactersCard />
      <Separator>
        <h2>
          <Link to="signup">Join us</Link> and discover all the benefits we have
          prepared for you...
        </h2>
      </Separator>
      <VehiclesCard />
    </>
  );
}

export default Home;
