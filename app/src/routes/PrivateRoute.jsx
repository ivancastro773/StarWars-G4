import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, logged }) {
  return logged ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
