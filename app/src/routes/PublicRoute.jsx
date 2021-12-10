import { Navigate } from 'react-router-dom';

function PublicRoute({ children, logged = false }) {
  return logged ? <Navigate to="/" /> : children;
}

export default PublicRoute;
