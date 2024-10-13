import "../css/index.css";

function PorQueUsar() {
  return (
    <main style={{ backgroundColor: "black" }}>
      <br /> <br /> <br />
      <article className="container px-5" id="por-que-usarlo">
        <section className="row d-flex align-items-center">
          <section className="col-lg-6 col-md-12 text-center">
            <h2 className="Montserrat">
              <strong>¿Por qué usar Ultra Notas?</strong>
            </h2>
            <img
              className="img-fluid"
              src="src/assets/fotopublicidad.webp"
              alt="Foto Neon"
              loading="lazy"
              width="90%"
            />
          </section>
          <section
            className="col-lg-6 col-md-12"
            style={{ paddingRight: "30px" }}
          >
            <br />
            <h3 className="Montserrat" style={{ color: "#2176FF" }}>
              GRATUITA Y FÁCIL DE USAR
            </h3>
            <p style={{ paddingRight: "80px" }}>
              Disfruta de todas las funcionalidades sin costo. Con una interfaz
              intuitiva y sin complicaciones, empezar a organizar tus ideas y
              proyectos será tan simple como abrir una nueva nota. ¡Sin curva de
              aprendizaje!
            </p>
            <h3 className="Montserrat" style={{ color: "#2176FF" }}>
              OPTIMIZADO PARA PROGRAMADORES
            </h3>
            <p style={{ paddingRight: "80px" }}>
              Un entorno diseñado con herramientas y atajos pensados para que el
              código y las ideas fluyan mejor, facilitando la organización de
              proyectos complejos.
            </p>
            <h3 className="Montserrat" style={{ color: "#2176FF" }}>
              ULTRA PERSONALIZACIÓN
            </h3>
            <p style={{ paddingRight: "80px" }}>
              Personaliza completamente a tu gusto y comodidad.
            </p>
          </section>
        </section>
      </article>
    </main>
  );
}

export default PorQueUsar;
