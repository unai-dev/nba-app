import { PlayersPage } from "@/features/nba/pages/PlayersPage";
import { TeamsPage } from "@/features/nba/pages/TeamsPage";
import { createBrowserRouter, Navigate } from "react-router";

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
