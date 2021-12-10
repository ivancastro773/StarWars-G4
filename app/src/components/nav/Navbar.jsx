import { NavLink, Link } from 'react-router-dom';

import './nav.css';

function Navbar() {
  let logged = true;
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link to="/" className="starwars-logo">
            Star Wars
          </Link>
        </div>
        <div className="navigation-links">
          <ul className="nav-items">
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? 'link-active' : '')}
                to="/vehicles"
              >
                vehicles
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? 'link-active' : '')}
                to="/characters"
              >
                characters
              </NavLink>
            </li>
            {logged ? (
              <li>
                <button className="btn-logout">Logout</button>
              </li>
            ) : (
              <li>
                <button className="btn-login">Login</button>
              </li>
            )}
          </ul>
          <div className="session-actions"></div>
        </div>
        {/* <!-- HAMBURGER --> */}
        <div className="hamburger" id="hamburger">
          <i className="fas fa-bars" id="bars"></i>
          <i className="fas fa-times d-none" id="close"></i>
        </div>
      </nav>
      {/* <!-- DROPDOWN --> */}
      <div className="dropdown-navigation-links d-none hideitem">
        <ul className="nav-items">
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'link-active' : '')}
              to="/vehicles"
            >
              vehicles
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'link-active' : '')}
              to="/characters"
            >
              characters
            </NavLink>
          </li>
          {logged ? (
            <li>
              <button className="btn-logout">Logout</button>
            </li>
          ) : (
            <li>
              <button className="btn-login">Login</button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
