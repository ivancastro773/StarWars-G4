import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, logged = false }) {
  return logged ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
