import "./css/Crear.css";

function Crear() {
  return (
    <main className="container crear">
      <article className="d-flex">
        <section className="p-3">
          <h1 className="nombre-crear">Nombre de la Nota</h1>
          <p className="descripcion-crear p-1">
            Descripción: Descripción de la nota
          </p>
        </section>
        <section className="p-3 d-flex">
          <a href="#insertar-imagen">
            <img
              src="src/assets/newimg.webp"
              alt="Aca va tu imagen"
              className="crear-img img-fluid"
            />
          </a>
        </section>
      </article>
      {/* <span className="texto-crear p-3">
        Aquí la nota, puedes agregar tanto texto, como código, como imagenes,
        dibujar y más
      </span> */}
      <span className="texto-crear p-3">
        <textarea className="form-control input-crear">
          Aquí la nota, puedes agregar tanto texto, como código, como imágenes,
          dibujar y más
        </textarea>
      </span>
    </main>
  );
}

export default Crear;
