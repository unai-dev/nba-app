import type { FC, PropsWithChildren } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext";

// PROVIDER
export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { authStatus, user, handleLogin, handleLogout } = useAuth();
  return (
    <AuthContext
      value={{
        authStatus: authStatus,
        user: user,

        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext>
  );
};
