import { Navigate, Outlet } from "react-router-dom"
import { Authenticator } from "./ProtectedRoutes";



const Auth = (): Authenticator | null => {
    const authenticatorStr = localStorage.getItem('userData');
    const authenticator = authenticatorStr ? JSON.parse(authenticatorStr) : null;
    return authenticator;
};

const ProtectedSignIn = () => {
    const isAuth = Auth()

    if (isAuth) {
        return <Navigate to="/private" replace />
    } else {
        return <Outlet />
    }

}

export default ProtectedSignIn;