import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import "./css/index.css";

function Contactanos() {
  return (
    <footer style={{ backgroundColor: "black" }}>
      <article className="container" id="contactanos">
        <br /> <br /> <br />
        <section className="d-flex row">
          <div className="col-6 d-flex flex-column justify-content-end">
            <h2 className="Montserrat">
              <strong>
                Con Ultra Notas,
                <br />
                hasta la idea más pequeña puede volverse Ultra
              </strong>
            </h2>
            <br />
            <Link
              type="button"
              className="btn btn-outline-danger"
              to="/registrarse"
              style={{ width: "200px" }}
            >
              Unite a Ultra Notas
            </Link>
            <br />
            <br />
            <br />
          </div>
          <div className="col-lg-6 col-md-12">
            <img
              src="src/assets/Cubos3d.webp"
              alt="Cubos 3D cayendo"
              className="img-fluid"
              loading="lazy"
              width="94%"
            />
          </div>
        </section>
        <div className="d-flex justify-content-center">
          <span className="Montserrat ms-2">CONTÁCTANOS </span>
          <a href="instagram" className="ms-2">
            <FaInstagram className="iconos" />
          </a>
          <a href="twitter" className="ms-2">
            <FaXTwitter className="iconos" />
          </a>
          <a href="gmail" className="ms-2">
            <SiGmail className="iconos" />
          </a>
        </div>
        <br />
      </article>
    </footer>
  );
}

export default Contactanos;
