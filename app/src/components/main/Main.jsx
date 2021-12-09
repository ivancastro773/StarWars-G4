import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../../routes/PrivateRoute';

import Characters from './section/Characters';
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
              <Characters />
            </PrivateRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
