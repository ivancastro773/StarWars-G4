import Carrousel from "./carrousels/Carrousel";
import CarrouselMovies from "./carrousels/CarrouselMovies";

function Home() {
  return (
    <>
      <Carrousel />
      <CarrouselMovies />
      <section>
        <h2>cards</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          corporis sapiente in ullam velit doloribus ex rerum possimus est,
          laborum provident ratione, neque autem nemo tempora fugiat! Maxime,
          omnis necessitatibus.
        </p>
      </section>
    </>
  );
}

export default Home;
