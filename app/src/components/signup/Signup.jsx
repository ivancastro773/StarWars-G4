import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
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

  // TODO: utilizar Formik
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
    <div className="create-container">
      <div className="form-container">
        <h2>Create user</h2>
        <form>
          <label>User</label>
          <br />
          <input type="text" placeholder="User" />
          <br />
          <label>Email</label>
          <br />
          <input type="email" placeholder="E-mail" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <label>Password confirm</label>
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button>
            <Link to="/login">Create</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
