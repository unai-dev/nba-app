import { createBrowserRouter, Navigate } from "react-router";
import { SearchPlayer } from "../pages/SearchPlayer";
import { SearchTeam } from "../pages/SearchTeam";

export const appRouter = createBrowserRouter([
  {
    path: "/players",
    element: <SearchPlayer />,
  },
  {
    path: "/teams",
    element: <SearchTeam />,
  },
  {
    path: "*",
    element: <Navigate to={"/players"} />,
  },
]);
