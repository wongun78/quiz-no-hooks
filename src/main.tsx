import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Entry point
// - StrictMode giúp phát hiện side effects không an toàn khi dev.
// - React 18+ dùng createRoot.

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
