import { Navigate, Outlet } from 'react-router-dom';
import { Authenticator } from '../protocols/User';

const Auth = (): Authenticator | null => {
  const authenticatorStr = localStorage.getItem('userData');
  const authenticator = authenticatorStr ? JSON.parse(authenticatorStr) : null;
  return authenticator;
};


const ProtectedRoutes = () => {
  const isAuth = Auth();
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
