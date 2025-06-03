import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const getInitialAuthState = () => {
    const stored = localStorage.getItem("isAuthenticated");
    const expiration = localStorage.getItem("sessionExpiration");

    if (stored === "true" && expiration) {
      const now = Date.now();
      if (now < parseInt(expiration)) {
        return true;
      } else {

        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("sessionExpiration");
        return false;
      }
    }
    return false;
  };

  const [isAuthenticated, setIsAuthenticated] = useState(getInitialAuthState);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", String(isAuthenticated));
  }, [isAuthenticated]);

  const login = (username: string, password: string) => {
    if (username === "luffy" && password === "1234") {
      setIsAuthenticated(true);
      const expiration = Date.now() + 60 * 60 * 1000; 
      localStorage.setItem("sessionExpiration", expiration.toString());
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("sessionExpiration");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
