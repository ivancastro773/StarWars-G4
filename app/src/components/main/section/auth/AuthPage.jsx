import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AxiosRequest } from '../../../helpers/axios-request';
import { Toast } from '../../../helpers/sweet-alert';
import InvalidPage from '../error/InvalidPage';
import Loader from '../loader/Loader';

function AuthPage() {
  const { token = '' } = useParams();
  const [activationprocess, setActivationProcess] = useState(true);
  const [activationfailed, setActivationFailed] = useState(false);

  useEffect(() => {
    const verifyToken = async (token) => {
      try {
        const { status } = await AxiosRequest({
          url: `/auth/account-activate/${token}`,
        });
        if (status !== 200) {
          setActivationProcess(false);
          setActivationFailed(true);
          return Toast('Invalid or expired token', 'error');
        }
        setActivationProcess(false);
        return Toast('Your account has been activated', 'success');
      } catch (error) {
        return Toast('Something bad happen', 'error');
      }
    };
    verifyToken(token);
  }, [token]);

  if (!token) {
    return <InvalidPage />;
  }

  return (
    <div className="authentication-page">
      <div className="authentication-steps">
        <h2>Hello! Thanks for been part of our community!</h2>
        <h3>Now, we are going to proceed to verify your account.</h3>
        <h3>
          Once done, you will be able to access to more functionalities inside
          our page.
        </h3>
        <div className="account-activation">
          {activationprocess ? (
            <span className="activating-account">Activating...</span>
          ) : (
            <>
              {activationfailed ? (
                <>
                  <span className="activation-failed">
                    Account activation failed
                  </span>
                  <p className="activation-failed">
                    You have and invalid or expired token. {' '}
                    <Link to="/signup">sign up again</Link>
                  </p>
                </>
              ) : (
                <>
                  <span className="activation-correct">Account active</span>
                  <p className="activation-correct">
                    Now, you can <Link to="/login">login</Link>
                  </p>
                </>
              )}
            </>
          )}
          {activationprocess && <Loader className="auth-loader" />}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
