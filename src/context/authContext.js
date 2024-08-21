import React, { createContext, useContext, useState } from "react";
import Loginn from "../pages/login";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await Loginn(email, password);
      setUser(response);
      return response;
    } catch (error) {
      console.error('Login Error:', error.message);
      throw error;
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await signup(name, email, password);
      const [firstName, lastName] = name.split(' ');
      setUser({ firstName, lastName, email });
      return response;
    } catch (error) {
      console.error('Signup Error:', error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);