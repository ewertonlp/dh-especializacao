/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();

  function fillUserEmail(email) {
    setUserData(email);
    localStorage.setItem('@system_user', email);
  }

  function logout() {
    navigate('/login');
    localStorage.clear();
  }

  useEffect(() => {
    const response = localStorage.getItem('@system_user');

    if (response) {
      fillUserEmail(response);
    }
    setIsLogged(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{ userData, fillUserEmail, isLogged, setIsLogged, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
