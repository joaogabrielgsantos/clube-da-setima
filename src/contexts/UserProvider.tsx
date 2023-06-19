import { ReactNode } from "react";
import UserContext from "./UserContext";
import { Authenticator } from "../auth/ProtectedRoutes";
import useLocalStorage from "../hooks/useLocalStorage";

type UserProviderProps = {
    children: ReactNode;
  };

export function UserProvider({ children }: UserProviderProps) {
    const [userData, setUserData] = useLocalStorage<Authenticator | null>('userData', null);    
    
    return (
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    );
  }