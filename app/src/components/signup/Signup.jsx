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
  const [authdata, setAuthData] = useState(initialState);
  const [signingin, setIsSigningIn] = useState(false);
  const [iconPass, setIconPass] = useState({ visible: true });
  const [inputtype, setInputType] = useState({ type: 'password' });
  const [globalcontext] = useContext(MainContext);
  const { logged } = globalcontext;
  const { type } = inputtype;
  const { visible } = iconPass;

  const [islogged] = useLocalStorage('logged', logged);

  if (islogged) {
    return <Navigate to="/" />;
  }

  const { name, email, password, passwordConfirm } = authdata;

  const showPassword = () => {
    setIconPass((prevState) => {
      if (prevState.visible) {
        setInputType({ type: 'text' });
        return { ...prevState, visible: !prevState.visible };
      } else {
        setInputType({ type: 'password' });
        return { ...prevState, visible: !prevState.visible };
      }
    });
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
          <div className="form-auth-input">
            <label>Name</label>
            <br />
            <div className="auth-data-input">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                autoFocus
                value={name}
                onChange={handleInputChange}
              />
              <span>
                <i className="far fa-user"></i>
              </span>
            </div>
          </div>
          <div className="form-auth-input">
            <label>Email</label>
            <br />
            <div className="auth-data-input">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={handleInputChange}
              />
              <span>
                <i className="far fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="form-auth-input">
            <label>Password</label>
            <br />
            <div className="auth-data-input">
              <input
                type={type}
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={handleInputChange}
              />
              <span onClick={showPassword}>
                {visible ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="far fa-eye"></i>
                )}
              </span>
            </div>
          </div>
          <div className="form-auth-input">
            <label>Confirm your password</label>
            <br />
            <div className="auth-data-input">
              <input
                type={type}
                name="passwordConfirm"
                placeholder="Confirm password"
                required
                value={passwordConfirm}
                onChange={handleInputChange}
              />
              <span onClick={showPassword}>
                {visible ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="far fa-eye"></i>
                )}
              </span>
            </div>
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
