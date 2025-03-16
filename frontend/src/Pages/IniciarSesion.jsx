import "./css/IniciarSesion.css";
import { Link } from "react-router-dom";
// import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa"; //ojo cerrado
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./css/index.css";

function IniciarSesion() {
  return (
    <main className="fondo2">
      <a href="/">
        <img
          src="src/assets/Logo.svg"
          alt="Logo"
          width="30px"
          style={{ marginTop: "10px", marginLeft: "13px" }}
        />
      </a>

      <article className="container col-12 col-sm-10 col-md-8 col-lg-4 IniciarSesion">
        <h2 className="Montserrat text-center IniciarSesion-texto neon">
          <strong>INICIAR SESIÓN</strong>
        </h2>

        <section className="mb-3 d-flex flex-column align-items-start">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label Montserrat"
          >
            <strong>Correo</strong>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="ejemplo@gmail.com"
          />
        </section>

        <section className="mb-3 d-flex flex-column">
          <label htmlFor="inputPassword5" className="form-label Montserrat">
            <strong>Contraseña</strong>
          </label>
          <div className="d-flex">
            <input
              type="password"
              id="inputPassword5"
              className="form-control"
              aria-describedby="passwordHelpBlock"
            />
            <FaEyeSlash className="ojo-cerrado" />
          </div>
        </section>

        <section className="mb-3 d-flex flex-column">
          <Link to="/RecuperarContraseña" className="mb-4 botones">
            Olvide mi contraseña
          </Link>

          <button
            type="button"
            className="btn btn-primary mb-2 d-flex align-items-center justify-content-between"
          >
            <FaGoogle />
            <span className="mx-auto">Acceder con Google</span>
          </button>

          <button
            type="button"
            className="btn btn-dark mb-4 d-flex align-items-center justify-content-between"
          >
            <FaGithub />
            <span className="mx-auto">Acceder con GitHub</span>
          </button>
        </section>

        <section className="d-flex justify-content-center">
          <Link className="btn btn-light mb-4 Montserrat" to="/home">
            <strong>Acceder</strong>
          </Link>
        </section>
        <div className="text-center">
          <Link className="botones Montserrat" to="/registrarse">
            No tengo cuenta, <strong>REGISTRARME</strong>
          </Link>
        </div>
      </article>
    </main>
  );
}

export default IniciarSesion;
