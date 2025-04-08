import React, { createContext, useState, useContext } from "react";

// 1. Create the context
const AuthContext = createContext();

// 2. Provide login state to the app
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Create a shortcut hook to use login/logout
export const useAuth = () => useContext(AuthContext);
