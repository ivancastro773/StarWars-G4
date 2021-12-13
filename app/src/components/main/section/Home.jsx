import Carrousel from "./carrousels/Carrousel";
import CarrouselMovies from "./carrousels/CarrouselMovies";
import Cards from "./card/card";

function Home() {
  return (
    <>
      <Carrousel />
      <CarrouselMovies />
      <Cards/> 
    </>
  );
}

export default Home;
