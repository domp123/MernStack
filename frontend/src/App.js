import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import React, { useState } from "react";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import AddPet from "./pages/AddPet";
import AboutUs from "./pages/AboutUs";
import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import PlayDates from "./pages/PlayDates";

function App() {
  const { user } = useAuthContext();
  const [imageSelection, setImageSelection] = useState("both");
  const handleImageSelection = (selection) => {
    setImageSelection(selection);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar handleImageSelection={handleImageSelection} />
        <Sidebar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <Home imageSelection={imageSelection} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/AddPet"
              element={
                user ? (
                  <AddPet imageSelection={imageSelection} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/AboutUs"
              element={
                user ? (
                  <AboutUs imageSelection={imageSelection} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Products"
              element={
                user ? (
                  <Products imageSelection={imageSelection} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Contact"
              element={
                user ? (
                  <Contact imageSelection={imageSelection} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/playdates"
              element={
                user ? (
                  <PlayDates className="PlayDates" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
