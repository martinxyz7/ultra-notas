import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Inicio
import Navbar from "./Pages/Navbar.jsx";
import Inicio from "./Pages/Inicio.jsx";
import QueEs from "./Pages/QueEs.jsx";
import PorQueUsar from "./Pages/PorQueUsar.jsx";
import FaQ from "./Pages/FaQ.jsx";
import Contactanos from "./Pages/Contactanos.jsx";
import IniciarSesion from "./Pages/IniciarSesion.jsx";
import Registrarse from "./Pages/Registrarse.jsx";

// Home
import Sidebar from "./App/Sidebar.jsx";
import MiniNavbar from "./App/MiniNavbar.jsx";
import Caja from "./App/Caja.jsx";
// import Home from "./App/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Inicio />
              <QueEs />
              <PorQueUsar />
              <FaQ />
              <Contactanos />
            </>
          }
        />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route
          path="/home"
          element={
            <div style={{ backgroundColor: "#191919" }}>
              <Sidebar />
              <MiniNavbar />
              <Caja />
            </div>
          }
        />
      </Routes>
    </Router>
  </StrictMode>
);
