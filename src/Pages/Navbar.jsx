import "../css/Navbar.css";
import { FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <article className="container-fluid">
        <a className="navbar-brand" href="#inicio">
          <img
            src="src/assets/Logo.svg"
            alt="Logo"
            width="30px"
            className="logo"
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
              <a className="nav-link active" href="#inicio">
                INICIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#que-es">
                ¿QUÉ ES ULTRA NOTAS?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#por-que-usarlo">
                POR QUÉ USARLO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactanos">
                CONTÁCTANOS
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                UNIRSE
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/iniciar-sesion">
                    INICIAR SESION
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/registrarse">
                    REGISTRARSE
                  </a>
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
