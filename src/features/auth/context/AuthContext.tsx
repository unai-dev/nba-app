import { createContext } from "react";
import type { User } from "../interfaces/user.interface";

export type AuthStatus = "checking" | "auth" | "not-auth";

// CONTEXT PROPS
interface AuthContextProps {
  user: User | null;
  authStatus: AuthStatus;
  isAuth: boolean;

  login: (password: string) => boolean;
  logout: () => void;
}

// CONTEXT
export const AuthContext = createContext({} as AuthContextProps);
