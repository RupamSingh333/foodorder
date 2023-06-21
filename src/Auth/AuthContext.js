import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Function to check if the user is logged in

  const isLoggedIn = () => {
    return loggedInUser !== null;
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
