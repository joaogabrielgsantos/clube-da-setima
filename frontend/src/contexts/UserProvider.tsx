import { ReactNode } from "react";
import UserContext from "./UserContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { Authenticator } from "../protocols/User";

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