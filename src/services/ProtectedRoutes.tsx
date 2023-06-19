import { Navigate, Outlet } from 'react-router-dom';

export type Authenticator = {
  token: string;
  user: {
    id: number;
    email: string;
    createdAt: string;
    updatedAt: string;
    types: {
      id: number;
      name: string;
    };
  };
};

const Auth = (): Authenticator | null => {
  const authenticatorStr = localStorage.getItem('userData');
  const authenticator = authenticatorStr ? JSON.parse(authenticatorStr) : null;
  return authenticator;
};


const ProtectedRoutes = () => {
  const isAuth = Auth();
  return isAuth ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default ProtectedRoutes;
