import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AxiosRequest } from '../helpers/axios-request';
import { Toast } from '../helpers/sweet-alert';
import Loader from '../main/section/loader/Loader';

function ResetEmail() {
  const initialState = {
    email: '',
  };
  const [authdata, setAuthData] = useState(initialState);
  const [reseting, setReseting] = useState(false);
  const { email } = authdata;

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
    if (email.trim() === '') {
      return Toast('Please, insert your email', 'warning');
    }
    try {
      setReseting((prevState) => !prevState);
      const { status, message, data } = await AxiosRequest({
        url: '/auth/forgot-password',
        method: 'POST',
        data: {
          email,
        },
      });
      if (status !== 200) {
        setReseting((prevState) => !prevState);
        return Toast(message, 'warning');
      }
      const { message: msg } = data;
      setReseting((prevState) => !prevState);
      setAuthData(initialState);
      return Toast(msg, 'success');
    } catch (error) {
      setReseting((prevState) => !prevState);
      return Toast('Something bad happen', 'error');
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Validate email</h2>
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
          <div className="btn-submit-container">
            <button
              type="submit"
              className="btn-auth btn-login"
              disabled={reseting}
            >
              {reseting ? 'reseting...' : 'reset'}
            </button>
          </div>
          {reseting && <Loader className="auth-loader" />}
        </form>
        <div className="more-actions">
          <div>
            <p>Remember your password?</p>
            <Link to="/login" className="btn1">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetEmail;
