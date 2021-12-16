import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MainContext } from '../../context/MainContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import './signup.css';

function Signup() {
  const [globalcontext, setGlobalContext] = useContext(MainContext);
  const { logged, user } = globalcontext;

  const [islogged, setLogged] = useLocalStorage('logged', logged);
  const [, setUserData] = useLocalStorage('user', user);

  if (islogged) {
    return <Navigate to="/" />;
  }

  const handleSignup = () => {
    setLogged(true);
    const userData = {
      name: 'alexander',
      mail: 'alexander@mail.com',
      role: 'standard',
    };
    setUserData(userData);
    setGlobalContext((prevState) => {
      return {
        ...prevState,
        logged: true,
        user: userData,
      };
    });
  };

  return (
    <div className="signup-container">
      <h2>SIGNUP</h2>
      <button onClick={handleSignup}>SIGNUP</button>
    </div>
  );
}

export default Signup;
