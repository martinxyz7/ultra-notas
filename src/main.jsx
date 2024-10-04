import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Home />
    <QueEs />
    <PorQueUsar />
    <FaQ />
    <Contactanos />
  </StrictMode>
);
