import { Link } from "react-router-dom";
import "./css/MiniNavbar.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

function MiniNavbar() {
  return (
    <nav className="d-flex justify-content-end align-items-center p-3 MiniNavbar">
      <FaCircleUser className="MiniNavbar-iconos" />
      <IoNotifications
        className="MiniNavbar-iconos icono-notificacion"
        role="button"
      />
      <div className="dropdown">
        <FaBars
          className="dropdown-toggle MiniNavbar-iconos icono-configuracion"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></FaBars>

        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" href="#">
              <FaCircleUser />
              Editar Perfil
            </Link>
          </li>
          <li>
            <Link className="dropdown-item d-flex" href="#">
              <IoSettingsSharp />
              Configuración
            </Link>
          </li>
          <li>
            <Link className="dropdown-item d-flex" href="#">
              <MdEditSquare />
              Personalización
            </Link>
          </li>
          <li>
            <Link to="/" className="dropdown-item d-flex" href="#">
              <IoMdLogOut />
              Cerrar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MiniNavbar;
