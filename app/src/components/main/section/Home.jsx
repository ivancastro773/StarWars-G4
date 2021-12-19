import Carrousel from './carrousels/Carrousel';
import CarrouselMovies from './carrousels/CarrouselMovies';
import CharactersCard from './card/CharactersCard';
import VehiclesCard from './card/VehiclesCard';
import Separator from './separator/Separator';
import JoinUs from './separator/JoinUs';

function Home() {
  return (
    <>
      <Carrousel />
      <CarrouselMovies />
      <CharactersCard />
      <Separator>
        <JoinUs />
      </Separator>
      <VehiclesCard />
    </>
  );
}

export default Home;
