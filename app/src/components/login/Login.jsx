import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import './login.css';
import { MainContext } from '../../context/MainContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import { AxiosRequest } from '../helpers/axios-request';
import { Toast } from '../helpers/sweet-alert';

function Login() {
  const [globalcontext, setGlobalContext] = useContext(MainContext);
  const { logged, user } = globalcontext;

  const [islogged, setLogged] = useLocalStorage('logged', logged);
  const [, setUserData] = useLocalStorage('user', user);

  if (islogged) {
    return <Navigate to="/" />;
  }

  // TODO: utilizar Formik para la validacion del formulario
  const handleLogin = async () => {
    try {
      const response = await AxiosRequest({
        url: '/auth/login',
        method: 'POST',
        data: {
          email: '',
          password: '',
        },
      });
      if (response.status === 200) {
        const userData = {
          name: '',
          mail: '',
          role: '',
        };
        setLogged(true);
        setUserData(userData);
        setGlobalContext((prevState) => {
          return {
            ...prevState,
            logged: true,
            user: userData,
          };
        });
        Toast('Login success', 'success');
      }
    } catch (error) {
      return Toast('Something bad happen', 'error');
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <label>User</label>
          <br />
          <input type="text" placeholder="User" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <br />
          <button className="bt1">Sing in</button>
          <button>Create user</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
