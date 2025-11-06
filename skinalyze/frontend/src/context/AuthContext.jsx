// import { createContext, useContext, useState, useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0();
//   const [clinician, setClinician] = useState(null);

//   useEffect(() => {
//     if (isAuthenticated && user) {
//       setClinician({
//         id: user.sub,
//         name: user.name,
//         email: user.email,
//         picture: user.picture,
//       });
//     }
//   }, [isAuthenticated, user]);

//   const value = {
//     isAuthenticated,
//     isLoading,
//     clinician,
//     login: loginWithRedirect,
//     logout: () => logout({ returnTo: window.location.origin }),
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within AuthProvider');
//   }
//   return context;
// };
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [clinician, setClinician] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('clinician');
    if (storedUser) {
      setClinician(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    const user = userData || {
      id: '1',
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@hospital.com',
      specialty: 'Dermatology',
      picture: null,
    };
    
    setClinician(user);
    setIsAuthenticated(true);
    localStorage.setItem('clinician', JSON.stringify(user));
  };

  const logout = () => {
    setClinician(null);
    setIsAuthenticated(false);
    localStorage.removeItem('clinician');
  };

  const value = {
    isAuthenticated,
    isLoading,
    clinician,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
