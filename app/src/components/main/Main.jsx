import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../../routes/PrivateRoute';

import CharactersPage from './section/pages/CharactersPage';
import Home from './section/Home';
import VehiclesPage from './section/pages/VehiclesPage';

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
        <Route 
          exact
          path="characters"
          element={
            <PrivateRoute logged={true}>
              <CharactersPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
