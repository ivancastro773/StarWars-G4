import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AxiosRequest } from '../helpers/axios-request';
import { Toast } from '../helpers/sweet-alert';
import InvalidPage from '../main/section/error/InvalidPage';
import Loader from '../main/section/loader/Loader';

function ResetPassword() {
  const { token = '' } = useParams();
  const navigate = useNavigate();
  const initialState = {
    password: '',
  };
  const [authdata, setAuthData] = useState(initialState);
  const [reseting, setReseting] = useState(false);

  const { password } = authdata;

  if (!token) {
    return <InvalidPage />;
  }

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
    if (password.trim() === '') {
      return Toast('Please, insert your new password', 'warning');
    }
    try {
      setReseting(true);
      const {
        status,
        data,
        message = '',
      } = await AxiosRequest({
        url: `/auth/resetpassword/${token}`,
        method: 'POST',
        data: {
          newPassword: password,
        },
      });
      if (status !== 200) {
        let msg = message || 'Reseting failed';
        setReseting(false);
        return Toast(msg, 'warning');
      }
      const { message: msg } = data;
      Toast(msg, 'success');
      return navigate('/login');
    } catch (error) {
      setReseting(false);
      return Toast('Something bad happen', 'error');
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Reset password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="New password"
              required
              autoFocus
              value={password}
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

export default ResetPassword;
