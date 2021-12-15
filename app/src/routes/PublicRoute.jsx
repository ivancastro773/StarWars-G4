import { Navigate } from 'react-router-dom';

function PublicRoute({ children, logged = false }) {
  // TODO: check localStorage or context for user validation
  return logged ? <Navigate to="/" /> : children;
}

export default PublicRoute;
