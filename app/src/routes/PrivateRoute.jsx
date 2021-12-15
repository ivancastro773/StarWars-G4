import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, logged = false }) {
  // TODO: check localStorage or context for user validation
  return logged ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
