import { createContext, useContext} from "react";
import { Authenticator } from "../auth/ProtectedRoutes";

type UserContextType = {
  userData: Authenticator | null;
  setUserData: (data: Authenticator | null) => void;
};

const UserContext = createContext<UserContextType>({
  userData: null,
  setUserData: () => null
});

export const useUserContext = () => useContext(UserContext);

export default UserContext;
