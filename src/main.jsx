import React from "react";
import ReactDOM from "react-dom/client";
import BaseLine from "./BaseLine";
import ErrorBoundary from "./ErrorBoundary";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BaseLine />
    </ErrorBoundary>
  </React.StrictMode>,
);
