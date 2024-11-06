import React, { createContext, useEffect, useState } from "react";
import { getlocalstorage, setlocalstorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const [UserData, setUserData] = useState(null);
  useEffect(() => {
    setlocalstorage();
    const { employees } = getlocalstorage();
    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider value={[UserData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
