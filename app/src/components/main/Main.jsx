import { Routes, Route } from 'react-router-dom';

import Home from './section/Home';
import CharactersPage from './section/pages/CharactersPage';
import Character from './section/character/Character';
import CharacterAdd from './section/character/CharacterAdd';
import VehiclesPage from './section/pages/VehiclesPage';
import Vehicle from './section/vehicle/Vehicle';
import VehicleAdd from './section/vehicle/VehicleAdd';
import InvalidPage from './section/error/InvalidPage';
import UsersPage from './section/pages/UsersPage';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="vehicles" element={<VehiclesPage />} />
        <Route exact path="vehicles/edit" element={<Vehicle />} />
        <Route exact path="vehicles/add" element={<VehicleAdd />} />
        <Route exact path="characters" element={<CharactersPage />} />
        <Route exact path="characters/edit" element={<Character />} />
        <Route exact path="characters/add" element={<CharacterAdd />} />
        <Route exact path="users" element={<UsersPage />} />
        <Route path="*" element={<InvalidPage />} />
      </Routes>
    </main>
  );
}

export default Main;
