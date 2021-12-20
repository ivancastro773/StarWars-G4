import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { MainContext } from '../../context/MainContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import { AxiosRequest } from '../helpers/axios-request';
import { Toast } from '../helpers/sweet-alert';
import Loader from '../main/section/loader/Loader';

function Login() {
  const initialState = {
    email: '',
    password: '',
  };
  const ShowPassword = () => {
    if (iconPass ===true) {
      setIconPass(false);
    }else{
      setIconPass(true);
    }
    var tipo = document.getElementById('password');
    if (tipo.type == 'password') {
      tipo.type = 'text';
    } else {
      tipo.type = 'password';
    }
  };
  const [iconPass,setIconPass] = useState(true);
  const [authdata, setAuthData] = useState(initialState);
  const [loginin, setIsLoginin] = useState(false);
  const [globalcontext, setGlobalContext] = useContext(MainContext);
  const { logged, user } = globalcontext;

  const [islogged, setLogged] = useLocalStorage('logged', logged);
  const [, setUserData] = useLocalStorage('user', user);

  if (islogged) {
    return <Navigate to="/" />;
  }

  const { email, password } = authdata;

  const handleInputChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setAuthData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      return Toast('Please, complete all the fields', 'warning');
    }
    try {
      setIsLoginin(true);
      const {
        status,
        data,
        message = '',
      } = await AxiosRequest({
        url: '/auth/login',
        method: 'POST',
        data: {
          email,
          password,
        },
      });
      if (status !== 200) {
        let msg = message || 'Login failed. Check your data';
        setIsLoginin(false);
        return Toast(msg, 'warning');
      }
      const userData = {
        ...data,
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
      Toast('Welcome', 'success');
      return <Navigate to="/" />;
    } catch (error) {
      setIsLoginin(false);
      return Toast('Something bad happen', 'error');
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoFocus
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <label>Password</label>
            <br />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={handleInputChange}
            />
            <span className='space-login' onClick={ShowPassword}>{iconPass ? <i class="fas fa-eye-slash"></i> : <i class="far fa-eye"></i>}</span>
          </div>
          <div className="btn-submit-container">
            <button
              type="submit"
              className="btn-auth btn-login"
              disabled={loginin}
            >
              {loginin ? 'login...' : 'login'}
            </button>
          </div>
          {loginin && <Loader className="auth-loader" />}
        </form>
        <div className="more-actions">
          <div className="signup-info">
            <p>You don't have an account?</p>
            <Link to="/signup" className="btn1">
              Signup
            </Link>
          </div>
          <div className="reset-info">
            <p>Forgot your password?</p>
            <Link to="/reset/email" className="btn1">
              Reset
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
