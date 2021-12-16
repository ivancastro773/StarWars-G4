import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const MainContext = createContext([{}, () => {}]);

const MainProvider = (props) => {
  const [logged] = useLocalStorage('logged', false);
  const [user] = useLocalStorage('user', {});
  const initialValues = {
    users: [],
    vehicles: [],
    characters: [],
    logged,
    user,
  };
  const [state, setState] = useState(initialValues);
  return (
    <MainContext.Provider value={[state, setState]}>
      {props.children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
