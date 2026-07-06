import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { NbaApp } from "./NbaApp";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NbaApp />
  </StrictMode>,
);
