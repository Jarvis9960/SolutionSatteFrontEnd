import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ClientListProvider from "./Context/ClientList";
import LeadListProvider from "./Context/LeadList";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ClientListProvider>
        <LeadListProvider>
          <App />
        </LeadListProvider>
      </ClientListProvider>
    </Router>
  </React.StrictMode>
);
