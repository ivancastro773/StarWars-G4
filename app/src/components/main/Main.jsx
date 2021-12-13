import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../../routes/PrivateRoute';

import CharactersPage from './section/pages/CharactersPage';
import Home from './section/Home';
import VehiclesPage from './section/pages/VehiclesPage';
import CharacterAdd from './section/character/CharacterAdd';

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
        <Route 
          exact
          path="character-add"
          element={
            <PrivateRoute logged={true}>
              <CharacterAdd />
            </PrivateRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
