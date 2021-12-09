import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../../routes/PrivateRoute';

import CharactersPage from './section/CharactersPage';
import Home from './section/Home';
import Vehicles from './section/Vehicles';

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
              <Vehicles />
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
