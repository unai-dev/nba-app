import { PlayersPage } from "@/features/nba/pages/PlayersPage";
import { TeamsPage } from "@/features/nba/pages/TeamsPage";
import { createBrowserRouter, Navigate } from "react-router";
import { PrivateRoute } from "./PrivateRoute";
import { LoginPage } from "@/features/auth/pages/LoginPage";

export const appRouter = createBrowserRouter([
  {
    path: "/players",
    // element: <PrivateRoute element={<PlayersPage />} />,
    element: <PlayersPage />,
  },
  {
    path: "/teams",
    // element: <PrivateRoute element={<TeamsPage />} />,
    element: <TeamsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to={"/players"} />,
  },
]);
