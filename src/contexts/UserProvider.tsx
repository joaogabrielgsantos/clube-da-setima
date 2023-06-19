import { ReactNode, useState } from "react";
import UserContext from "./UserContext";
import { Authenticator } from "../services/ProtectedRoutes";

type UserProviderProps = {
    children: ReactNode;
  };

export function UserProvider({ children }: UserProviderProps) {
    const [userData, setUserData] = useState<Authenticator | null>(null)
    console.log(userData);
    
    
    return (
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    );
  }