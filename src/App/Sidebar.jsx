import "../css/Sidebar.css";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { MdAddCircle } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { RiTeamFill } from "react-icons/ri";
import { ImBin2 } from "react-icons/im";

function Sidebar() {
  return (
    <nav className="d-flex flex-column col-2 p-3 Sidebar" id="sidebar">
      <section className="d-flex justify-content-start">
        <img
          src="src/assets/Logo.svg"
          alt="Logo"
          width="40rem"
          className="logo Sidebar-iconos"
        />
        <span className="Sidebar-texto">Usuario</span>
      </section>

      <section className="d-flex justify-content-start">
        <GoHomeFill className="Sidebar-iconos" />
        <span className="Sidebar-texto">Home</span>
      </section>

      <section className="d-flex justify-content-start">
        <Link to="crear">
          <MdAddCircle className="Sidebar-iconos" />
        </Link>
        <span className="Sidebar-texto" style={{ marginTop: "-0.2rem" }}>
          Crear
        </span>
      </section>

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

      <section className="d-flex papelera">
        <ImBin2 className="Sidebar-iconos" />
        <span className="Sidebar-texto">Papelera</span>
      </section>
    </nav>
  );
}

export default Sidebar;
