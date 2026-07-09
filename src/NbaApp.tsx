import { RouterProvider } from "react-router";

import { AuthContextProvider } from "./features/auth/context/AuthContextProvider";
import { appRouter } from "./router/app.router";

export const NbaApp = () => {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={appRouter} />
      </AuthContextProvider>
    </>
  );
};
