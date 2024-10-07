import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Contactanos() {
  return (
    <footer className="container" id="contactanos">
      <br /> <br /> <br />
      <section className="d-flex row">
        <div className="col-6 d-flex flex-column justify-content-end">
          <h2 className="titulo">
            <strong>
              Con Ultra Notas,
              <br />
              hasta la idea más pequeña puede volverse Ultra
            </strong>
          </h2>
          <br />
          <button
            type="button"
            className="btn btn-outline-danger d-inline-block"
            style={{ width: "200px", height: "50px" }}
          >
            Unite a Ultra Notas
          </button>
          <br />
          <br />
          <br />
        </div>
        <div className="col-lg-6 col-md-12">
          <img
            src="src/assets/Cubos3d.svg"
            alt="Cubos 3D cayendo"
            className="img-fluid"
          />
        </div>
      </section>
      <div className="d-flex justify-content-center">
        <span className="titulo ms-2">CONTÁCTANOS </span>
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
    </footer>
  );
}

export default Contactanos;
