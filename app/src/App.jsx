import { Link } from 'react-router-dom'

import './App.css';

function App() {
  let logged = true;
  return (
    <div className="container-fluid main-container">
      <div className="sticky-top bg-main-dark">
        {/* <nav className="navbar">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Star Wars</Link>
            <div className="session-actions">
              <button className="btn btn-primary">Login</button>
              <button className="btn btn-danger">Logout</button>
            </div>
          </div>
        </nav> */}
        {/* <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/active">Active</ Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/linkone">Link</ Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/linktwo">Link</ Link>
          </li>
        </ul> */}
        <nav className="navbar sticky-top navbar-expand-lg bg-main-dark color-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Star Wars</ Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end bg-main-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/movies">movies</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/characters">characters</ Link>
                  </li>
                </ul>
                <div className="session-actions">
                  {
                    logged ? (
                      <button className="btn btn-danger">Logout</button>
                    ) : (
                      <button className="btn btn-primary">Login</button>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <section>
        <h2>carrousel</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore impedit placeat illum natus cum delectus odit quae sit quo fuga, exercitationem architecto distinctio iste, repudiandae voluptates nulla saepe! Reprehenderit!</p>
      </section>
      <section>
        <h2>sub carrousel</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores sint eos reiciendis, ullam aliquid incidunt necessitatibus, obcaecati impedit quas culpa eveniet aliquam a neque amet cumque autem explicabo sapiente voluptate!</p>
      </section>
      <section>
        <h2>cards</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti corporis sapiente in ullam velit doloribus ex rerum possimus est, laborum provident ratione, neque autem nemo tempora fugiat! Maxime, omnis necessitatibus.</p>
      </section>
      <section>
        <h2>movies</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate nobis nisi vel. Inventore quidem minima officia repellendus pariatur beatae repellat earum consequatur expedita. Quasi autem, reprehenderit quam eius perferendis animi.</p>
      </section>
      <main>
        <h2>hola</h2>
        <p>lorem ipsum</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, repellendus! Repellendus soluta, hic vitae voluptatum id corporis incidunt. Excepturi doloribus voluptates obcaecati eum repellendus amet tempore animi esse, maxime nemo.</p>
      </main>
      <footer>
        <h2>footer</h2>
        <p>lorem ipsum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magnam iste laudantium dolore, rerum inventore illo necessitatibus. Atque, nisi culpa nobis ipsam autem ipsum maxime. Eaque maxime porro dolor aliquam!</p>
      </footer>
    </div>
  );
}

export default App;
