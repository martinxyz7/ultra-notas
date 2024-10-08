import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/index.css";
import Navbar from "./Pages/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import QueEs from "./Pages/QueEs.jsx";
import PorQueUsar from "./Pages/PorQueUsar.jsx";
import FaQ from "./Pages/FaQ.jsx";
import Contactanos from "./Pages/Contactanos.jsx";
// import NuestraComunidad from "./Pages/NuestraComunidad.jsx";
import IniciarSesion from "./Pages/IniciarSesion.jsx";
import Registrarse from "./Pages/Registrarse.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <QueEs />
              <PorQueUsar />
              <FaQ />
              <Contactanos />
            </>
          }
        />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registrarse" element={<Registrarse />} />
      </Routes>
    </Router>
  </StrictMode>
);
