function QueEs() {
  return (
    <main className="container" id="que-es">
      <article className="row d-flex align-items-center">
        <section className="col-lg-6 col-md-12 text-center">
          <img
            className="Flores img-fluid"
            src="src/assets/Flores.svg"
            alt="Fondo de Flores"
            style={{ marginTop: "4rem" }}
          />
        </section>
        <section className="col-lg-6 col-md-12">
          <h2 className="titulo">
            <br />
            <strong>¿Que es Ultra Notas?</strong>
          </h2>
          <p>
            <br />
            Es una plataforma de notas simplificada, pensada para programadores.
            <br /> <br />
            Te permite organizar tus ideas y proyectos de forma ágil, con
            funciones útiles como snippets de código, etiquetas y una estructura
            clara para mantener el foco en lo importante. <br /> <br /> Perfecta
            para tareas simples o para desarrollar proyectos de software sin
            complicaciones.
          </p>
          <button type="button" className="btn btn-outline-primary">
            Unite a Ultra Notas
          </button>
        </section>
      </article>
    </main>
  );
}

export default QueEs;
