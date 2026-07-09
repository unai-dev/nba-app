import { useState } from "react";
import type { User } from "../interfaces/user.interface";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authStatus, setAuthStatus] = useState<boolean>(false);

  const handleLogin = (password: string) => {
    console.log("Iniciando Sesion");
    return true;
  };

  const handleLogout = () => {
    setUser(null);
    setAuthStatus(false);
  };

  return {
    user,
    authStatus,

    handleLogin,
    handleLogout,
  };
};
