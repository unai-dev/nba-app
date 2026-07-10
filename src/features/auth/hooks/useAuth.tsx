import { useState } from "react";
import type { User } from "../interfaces/user.interface";
import type { AuthStatus } from "../context/AuthContext";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authStatus, setAuthStatus] = useState<AuthStatus>("not-auth");

  const handleLogin = (password: string) => {
    console.log("Iniciando Sesion");
    return true;
  };

  const handleLogout = () => {
    setUser(null);
    setAuthStatus("not-auth");
  };

  return {
    user,
    authStatus,

    handleLogin,
    handleLogout,
  };
};
