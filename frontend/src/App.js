import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
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

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
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
              element={user ? <AddPet /> : <Navigate to="/login" />}
            />
            <Route
              path="/AboutUs"
              element={user ? <AboutUs /> : <Navigate to="/login" />}
            />
            <Route
              path="/Products"
              element={user ? <Products /> : <Navigate to="/login" />}
            />
            <Route
              path="/Contact"
              element={user ? <Contact /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
