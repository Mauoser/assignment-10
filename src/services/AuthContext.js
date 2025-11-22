import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("jobportal_user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("jobportal_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("jobportal_user");
    }
  }, [user]);

  const login = async (email, password) => {
    const res = await axios.post("http://localhost:3000/user/login", {
      email,
      password,
    });
    setUser(res.data); // save { email, fullName }
    return res.data;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
