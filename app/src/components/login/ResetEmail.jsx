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
  const [validating, setValidating] = useState(false);
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
      setValidating(true);
      const { status, message, data } = await AxiosRequest({
        url: '/auth/forgot-password',
        method: 'POST',
        data: {
          email,
        },
      });
      if (status !== 200) {
        setValidating(false);
        return Toast(message, 'warning');
      }
      const { message: msg } = data;
      setValidating(false);
      setAuthData(initialState);
      return Toast(msg, 'success');
    } catch (error) {
      setValidating(false);
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
              disabled={validating}
            >
              {validating ? 'validating...' : 'validate'}
            </button>
          </div>
          {validating && <Loader className="auth-loader" />}
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
