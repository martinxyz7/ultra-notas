import "./css/Navbar.css";
import "./css/index.css";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Función para hacer scroll cuando estás en la ruta principal
  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si no estás en la página principal, navega a la principal y luego hace scroll
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Dale un pequeño tiempo para asegurarse que la página principal cargue
    }
  };

  return (
    <nav className="navbar navbar-expand-md">
      <article className="container-fluid">
        <a className="navbar-brand" href="#inicio">
          <img
            src="src/assets/Logo.svg"
            alt="Logo"
            width="30px"
            style={{ marginTop: "-5px" }}
          />
        </a>
        <FaBars
          className="navbar-toggler-icon d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></FaBars>
        <section className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                type="button"
                className="nav-link active"
                onClick={() => scrollToSection("#inicio")}
              >
                INICIO
              </a>
            </li>
            <li className="nav-item">
              <a
                type="button"
                className="nav-link"
                onClick={() => scrollToSection("#que-es")}
              >
                ¿QUÉ ES ULTRA NOTAS?
              </a>
            </li>
            <li className="nav-item">
              <a
                type="button"
                className="nav-link"
                onClick={() => scrollToSection("#por-que-usarlo")}
              >
                POR QUÉ USARLO
              </a>
            </li>
            <li className="nav-item">
              <a
                type="button"
                className="nav-link"
                onClick={() => scrollToSection("#faq")}
              >
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                type="button"
                className="nav-link"
                onClick={() => scrollToSection("#contactanos")}
              >
                CONTÁCTANOS
              </a>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                UNIRSE
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/iniciar-sesion">
                    INICIAR SESION
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/registrarse">
                    REGISTRARSE
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </article>
    </nav>
  );
}
export default Navbar;
