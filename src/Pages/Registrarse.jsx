import "../css/Registrarse.css";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Registrarse() {
  return (
    <main className="fondo">
      <a href="/">
        <img
          src="src/assets/Logo.svg"
          alt="Logo"
          width="30px"
          className="logo"
          style={{ marginTop: "10px", marginLeft: "13px" }}
        />
      </a>

      <article className="container col-12 col-sm-10 col-md-8 col-lg-4 Registrarse">
        <h2 className="titulo text-center IniciarSesion-texto neon">
          <strong>REGISTRARSE</strong>
        </h2>

        <section className="mb-3 d-flex flex-column align-items-start">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label titulo"
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
          <label htmlFor="inputPassword5" className="form-label titulo">
            <strong>Contraseña</strong>
          </label>
          <div className="d-flex">
            <input
              type="password"
              id="inputPassword5"
              className="form-control mb-4"
              aria-describedby="passwordHelpBlock"
            />
          </div>
        </section>

        <section className="mb-3 d-flex flex-column">
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
          <button className="btn btn-light mb-4 titulo">
            <strong>Registrarme</strong>
          </button>
        </section>
        <div className="text-center">
          <Link className="botones titulo" to="/Registrarse">
            Ya tengo cuenta, <strong>INICIAR SESIÓN</strong>
          </Link>
        </div>
      </article>
    </main>
  );
}

export default Registrarse;
