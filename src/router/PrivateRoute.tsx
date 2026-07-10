import { AuthContext } from "@/features/auth/context/AuthContext";
import { use, type FC } from "react";
import { Navigate } from "react-router";
import type { JSX } from "react/jsx-runtime";

interface Props {
  element: JSX.Element;
}

export const PrivateRoute: FC<Props> = ({ element }) => {
  const { authStatus } = use(AuthContext);

  if (authStatus === "checking") return <h1>Loading...</h1>;
  if (authStatus === "auth") return element;

  return <Navigate to={"/login"} replace />;
};
