import { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MainContext } from '../../context/MainContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Toast } from '../helpers/sweet-alert';

import './nav.css';

function Navbar() {
  const [globalcontext, setGlobalContext] = useContext(MainContext);

  const [barsactive, setBarsActive] = useState(true);
  const [timesactive, setTimesActive] = useState(false);
  const [dropdownactive, setDropdownActive] = useState(false);
  const [hiddendropdown, setHiddenDropdown] = useState('d-none');

  const { logged, user } = globalcontext;

  const [, setLogged] = useLocalStorage('logged', logged);
  const [, setUserData] = useLocalStorage('user', user);
  const isAdmin = user?.role === 'admin' || false;

  const handleHamburgerClick = () => {
    setBarsActive((prevState) => !prevState);
    setTimesActive((prevState) => !prevState);
    setDropdownActive((prevState) => !prevState);
    setHiddenDropdown('');
    if (!barsactive) {
      setTimeout(() => {
        setHiddenDropdown('d-none');
      }, 1000);
    }
  };

  const handleLogout = () => {
    setGlobalContext((prevContext) => {
      return {
        ...prevContext,
        logged: false,
        user: {},
      };
    });
    setLogged(false);
    setUserData({});
    return Toast('Session closed!', 'success');
  };
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
            {isAdmin && (
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? 'link-active' : ''
                  }
                  to="/users"
                >
                  users
                </NavLink>
              </li>
            )}
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
                <button className="btn-logout" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="btn-login">
                  Login
                </Link>
              </li>
            )}
          </ul>
          <div className="session-actions"></div>
        </div>
        {/* <!-- HAMBURGER --> */}
        <div
          className="hamburger"
          id="hamburger"
          onClick={handleHamburgerClick}
        >
          <i
            className={`fas fa-bars ${barsactive ? '' : 'd-none'}`}
            id="bars"
          ></i>
          <i
            className={`fas fa-times ${!timesactive ? 'd-none' : ''}`}
            id="close"
          ></i>
        </div>
      </nav>
      {/* <!-- DROPDOWN --> */}
      <div
        className={`dropdown-navigation-links ${
          !dropdownactive ? 'hideitem ' + hiddendropdown : 'showitem'
        } `}
      >
        <ul className="nav-items">
          {isAdmin && (
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? 'link-active' : '')}
                to="/users"
              >
                users
              </NavLink>
            </li>
          )}
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
              <button className="btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="btn-login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
