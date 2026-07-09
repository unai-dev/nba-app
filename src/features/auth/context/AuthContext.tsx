import { createContext } from "react";
import type { User } from "../interfaces/user.interface";

// CONTEXT PROPS
interface AuthContextProps {
  user: User | null;
  authStatus: boolean;

  login: (password: string) => boolean;
  logout: () => void;
}

// CONTEXT
export const AuthContext = createContext({} as AuthContextProps);
