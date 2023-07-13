import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PetsContextProvider } from "./context/PetContext";
import { AuthContextProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
      <PetsContextProvider>
        <App />
      </PetsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
