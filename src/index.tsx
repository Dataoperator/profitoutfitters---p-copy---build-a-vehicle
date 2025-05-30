import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BuildAVehicle } from "./screens/BuildAVehicle";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BuildAVehicle />
  </StrictMode>,
);
