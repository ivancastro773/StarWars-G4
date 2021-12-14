import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../../routes/PrivateRoute';

import CharactersPage from './section/pages/CharactersPage';
import Character from './section/character/Character';
/* import Vehicle from './section/vehicle/Vehicle'; */
import Home from './section/Home';
import VehiclesPage from './section/pages/VehiclesPage';
import InvalidPage from './section/error/InvalidPage';

function Main() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute logged={true}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="vehicles"
          element={
            <PrivateRoute logged={true}>
              <VehiclesPage />
            </PrivateRoute>
          }
        />
        {/* <Route
          exact
          path="vehicles/edit"
          element={
            <PrivateRoute logged={true}>
              <Vehicle />
            </PrivateRoute>
          }
        /> */}
        <Route
          exact
          path="characters"
          element={
            <PrivateRoute logged={true}>
              <CharactersPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="characters/edit"
          element={
            <PrivateRoute logged={true}>
              <Character />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <InvalidPage />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
