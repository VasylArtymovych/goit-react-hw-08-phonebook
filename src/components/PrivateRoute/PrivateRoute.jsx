import { Navigate } from 'react-router-dom';

//1. Must repeat the Route behavior.
export default function PrivateRoute({
  isLoggedIn,
  redirectPath = '/',
  children,
}) {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}
