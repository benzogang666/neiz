import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router";
import Providers from "./contexts/Providers";
import router from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>
);