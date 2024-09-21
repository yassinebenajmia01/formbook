import React, { createContext, useContext, useState } from "react";
import Loginn from "../pages/login";
import axios from  "axios"
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[token,setToken]=useState(localStorage.getItem('authToken')||null);
  const[authentificate,setAuthentificate]=useState(false);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8000/user/login",{email,password},
      );
      const{token,client}=response.data;
      setToken(token);
      setUser(client);
      setAuthentificate(true);
      return response;
    } catch (error) {
      console.error('Login Error:', error.message);
      throw error;
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await  axios.post("http://localhost:8000/user/signup")
      const [firstName, lastName] = name.split(' ');
      setToken(token);
      setAuthentificate(true);
      setUser({ firstName, lastName, email });
      return response;
    } catch (error) {
      console.error('Signup Error:', error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user,authentificate,token,login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);