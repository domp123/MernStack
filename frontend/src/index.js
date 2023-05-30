import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WorkoutsContextProvider } from "./context/WorkoutContext";
import { AuthContextProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCiPNaevaZyJwher3r73l_2o1fXfckPKHw&libraries=places"></script>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
