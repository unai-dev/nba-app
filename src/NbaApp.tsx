import { RouterProvider } from "react-router";

import { appRouter } from "./nba/router/app.router";

export const NbaApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
