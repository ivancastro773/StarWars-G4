import Carrousel from './carrousels/Carrousel';
import CarrouselMovies from './carrousels/CarrouselMovies';
import Card from './card/Card';
import UserStandard from './user/userStandard/UserStandard';

function Home() {
  return (
    <>
      <UserStandard/>
      <Carrousel />
      <CarrouselMovies />
      <Card />
    </>
  );
}

export default Home;
