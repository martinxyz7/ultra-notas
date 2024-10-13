import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { MdAddCircle } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { RiTeamFill } from "react-icons/ri";
import { ImBin2 } from "react-icons/im";
import { MdClose } from "react-icons/md";
import "./css/Sidebar.css";

function Sidebar2() {
  return (
    // El logo es el OFFCANVAS
    <nav className="p-4 Sidebar">
      <a
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        <img
          src="src/assets/Logo.svg"
          style={{ width: "3rem", marginTop: "-12px" }}
        />
      </a>

      {/* Dentro del OFFCANVAS */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title"
            data-bs-dismiss="offcanvas"
            id="offcanvasExampleLabel"
            type="button"
          >
            Volver
          </h5>
          <MdClose
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ fontSize: "2rem", color: "white" }}
          ></MdClose>
        </div>
        <article className="offcanvas-body">
          {/* HOME */}
          <section className="d-flex justify-content-start">
            <Link
              className="d-flex justify-content-center"
              to="/home"
              style={{ textDecoration: "none" }}
              data-bs-dismiss="offcanvas" // Cierra el offcanvas al hacer clic
            >
              <GoHomeFill className="Sidebar-iconos" />
              <span className="Sidebar-texto texto-link">Home</span>
            </Link>
          </section>

          {/* CREAR */}
          <section className="d-flex justify-content-start">
            <Link
              className="d-flex justify-content-center"
              to="/crear"
              style={{ textDecoration: "none" }}
            >
              <MdAddCircle className="Sidebar-iconos" />
              <span className="Sidebar-texto">Crear</span>
            </Link>
          </section>

          {/* DROPDOWNS */}
          <section className="d-flex nav-item dropdown justify-content-start">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <SlNotebook
                className="Sidebar-iconos"
                style={{ marginTop: "1rem" }}
              />
              <span className="Sidebar-texto">Notas</span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/nota1">
                  Nota1
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/nota2">
                  Nota2
                </Link>
              </li>
            </ul>
          </section>

          <section className="d-flex nav-item dropdown justify-content-start">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <RiTeamFill
                className="Sidebar-iconos"
                style={{ marginTop: "1rem" }}
              />
              <span className="Sidebar-texto">Equipos</span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/nota1">
                  Equipo7
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/nota2">
                  LosPapus
                </Link>
              </li>
            </ul>
          </section>

          {/* PAPELERA */}
          <section className="d-flex papelera">
            <Link
              className="d-flex justify-content-center"
              style={{ textDecoration: "none" }}
            >
              <ImBin2 className="Sidebar-iconos" />
              <span className="Sidebar-texto texto-link">Papelera</span>
            </Link>
          </section>
        </article>
      </div>
    </nav>
  );
}

export default Sidebar2;
