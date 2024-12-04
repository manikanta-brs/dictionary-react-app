import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./core/store/app-context";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>
);
reportWebVitals();
