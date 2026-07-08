import { createBrowserRouter, Navigate } from "react-router";
import { PlayersPage } from "../pages/PlayersPage";
import { TeamsPage } from "../pages/TeamsPage";

export const appRouter = createBrowserRouter([
  {
    path: "/players",
    element: <PlayersPage />,
  },
  {
    path: "/teams",
    element: <TeamsPage />,
  },
  {
    path: "*",
    element: <Navigate to={"/players"} />,
  },
]);
