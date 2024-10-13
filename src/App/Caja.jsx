import "./css/Caja.css";
import { Link } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";

function Caja() {
  return (
    <main className="p-5 Caja">
      <section className="container d-flex justify-content-start flex-wrap col-12 cajas">
        {/* CARD CREAR */}
        <Link className="card card-crear d-flex justify-content-center align-items-center">
          <MdAddCircle className="icono-crear" />
          <span>Crear</span>
        </Link>

        {/* CARDS */}
        <div className="card">
          <img
            src="src/assets/Cubos3d.webp"
            className="card-img-top Caja-img"
          />
          <div className="card-body">
            <h5 className="card-title">Nota</h5>
            <p className="card-text">texto super mega interesante</p>
            <a href="#" className="btn btn-dark d-flex justify-content-center">
              Editar
            </a>
          </div>
        </div>
        {/* <div className="card">
          <img
            src="src/assets/Cubos3d.webp"
            className="card-img-top Caja-img"
          />
          <div className="card-body">
            <h5 className="card-title">Notas1</h5>
            <p className="card-text">texto super mega interesante</p>
            <a href="#" className="btn btn-dark d-flex justify-content-center">
              Editar
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="src/assets/Cubos3d.webp"
            className="card-img-top Caja-img"
          />
          <div className="card-body">
            <h5 className="card-title">Notas1</h5>
            <p className="card-text">texto super mega interesante</p>
            <a href="#" className="btn btn-dark d-flex justify-content-center">
              Editar
            </a>
          </div>
        </div> */}
        {/* <div className="card">
          <img
            src="src/assets/Cubos3d.webp"
            className="card-img-top Caja-img"
          />
          <div className="card-body">
            <h5 className="card-title">Notas1</h5>
            <p className="card-text">texto super mega interesante</p>
            <a href="#" className="btn btn-dark d-flex justify-content-center">
              Editar
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="src/assets/Cubos3d.webp"
            className="card-img-top Caja-img"
          />
          <div className="card-body">
            <h5 className="card-title">Notas1</h5>
            <p className="card-text">texto super mega interesante</p>
            <a href="#" className="btn btn-dark d-flex justify-content-center">
              Editar
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="src/assets/Cubos3d.webp"
            className="card-img-top Caja-img"
          />
          <div className="card-body">
            <h5 className="card-title">Notas1</h5>
            <p className="card-text">texto super mega interesante</p>
            <a href="#" className="btn btn-dark d-flex justify-content-center">
              Editar
            </a>
          </div>
        </div> */}
        {/* CARDS END */}
      </section>
    </main>
  );
}

export default Caja;
