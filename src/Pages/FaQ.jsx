import "../css/FaQ.css";
function FaQ() {
  return (
    <article className="container" id="faq">
      <br /> <br /> <br />
      <section className="row text-center">
        <h2 className="Montserrat">
          <strong>Preguntas Frecuentes</strong>
        </h2>

        {/* PREGUNTA 1 */}
        <article
          className="accordion accordion-flush"
          id="accordionFlushExample"
        >
          <section className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                ¿Ultra Notas es gratuita?
              </button>
            </h2>
            <section
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Sí, Ultra Notas es completamente gratuita. Puedes acceder a
                todas sus funcionalidades sin ningún costo.
              </div>
            </section>
          </section>

          {/* PREGUNTA 2 */}
          <section className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                ¿Cómo está optimizada Ultra Notas para programadores?
              </button>
            </h2>
            <section
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Ultra Notas incluye herramientas útiles como snippets de código,
                etiquetas personalizadas y una estructura clara para que los
                programadores puedan gestionar sus proyectos sin complicaciones.
              </div>
            </section>
          </section>

          {/* PREGUNTA 3 */}
          <section className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                ¿Puedo colaborar con otros en Ultra Notas?
              </button>
            </h2>
            <section
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Próximamente lanzaremos una función de colaboración en tiempo
                real, para que puedas compartir tus notas y trabajar en equipo
                de manera más fluida.
              </div>
            </section>
          </section>
        </article>
      </section>
    </article>
  );
}

export default FaQ;
