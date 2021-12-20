import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { MainContext } from '../../context/MainContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import { AxiosRequest } from '../helpers/axios-request';
import { Toast } from '../helpers/sweet-alert';
import Loader from '../main/section/loader/Loader';

function Signup() {
  const initialState = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };
  const [iconPass, setIconPass] = useState(true);
  const [authdata, setAuthData] = useState(initialState);
  const [signingin, setIsSigningIn] = useState(false);
  const [globalcontext] = useContext(MainContext);
  const { logged } = globalcontext;

  const [islogged] = useLocalStorage('logged', logged);

  if (islogged) {
    return <Navigate to="/" />;
  }

  const { name, email, password, passwordConfirm } = authdata;

  const ShowPassword = () => {
    if (iconPass === true) {
      setIconPass(false);
    } else {
      setIconPass(true);
    }
    var tipo = document.getElementById('password');
    if (tipo.type === 'password') {
      tipo.type = 'text';
    } else {
      tipo.type = 'password';
    }
  };

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
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      passwordConfirm.trim() === ''
    ) {
      return Toast('Please, complete all the fields', 'warning');
    }
    try {
      setIsSigningIn(true);
      const {
        status,
        data,
        message = '',
      } = await AxiosRequest({
        url: '/auth/register',
        method: 'POST',
        data: {
          name,
          email,
          password,
          passwordConfirm,
        },
      });
      if (status !== 200) {
        setIsSigningIn(false);
        let msg = message || 'Signup failed';
        return Toast(msg, 'warning');
      }
      const { message: msg } = data;
      setIsSigningIn(false);
      setAuthData(initialState);
      return Toast(msg, 'success');
    } catch (error) {
      setIsSigningIn(false);
      return Toast('Something bad happen', 'error');
    }
  };

  return (
    <div className="create-container">
      <div className="form-container">
        <h2>Create user</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              autoFocus
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
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
            <span className="space-login" onClick={ShowPassword}>
              {iconPass ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="far fa-eye"></i>
              )}
            </span>
          </div>
          <div className="form-input">
            <label>Confirm your password</label>
            <br />
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm password"
              required
              value={passwordConfirm}
              onChange={handleInputChange}
            />
          </div>
          <div className="btn-submit-container">
            <button
              type="submit"
              className="btn-auth btn-login"
              disabled={signingin}
            >
              {signingin ? 'signing in...' : 'signup'}
            </button>
          </div>
          {signingin && <Loader className="auth-loader" />}
        </form>
        <div className="more-actions">
          <div>
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
