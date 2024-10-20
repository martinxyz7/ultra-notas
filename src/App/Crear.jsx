import { useState, useRef } from "react";
import "./css/Crear.css";

function Crear() {
  // Estados para almacenar los valores del título, descripción, contenido y la imagen
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState("src/assets/newimg.webp"); // Estado para la imagen
  const fileInputRef = useRef(null); // Ref para el input de imagen

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImagen(imageURL); // Actualiza la imagen con el archivo subido
    }
  };

  const handleClick = () => {
    fileInputRef.current.click(); // Dispara el clic en el input de tipo file
  };

  return (
    <main className="container crear">
      <article className="d-flex">
        {/* Inputs para el Título y la Descripción */}
        <section className="flex-column">
          <section className="p-3">
            <input
              type="text"
              className="form-control titulo-crear"
              id="titulo-crear"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Nombre de la Nota"
            />
          </section>

          <section className="p-3">
            <textarea
              type="text"
              className="form-control descripcion-crear"
              id="descripcion-crear"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows="2"
              maxLength="180"
              placeholder="Descripción de la nota"
            />
          </section>
        </section>

        {/* Imagen - Al hacer clic se abre el selector de archivos */}
        <section className="p-3 d-flex">
          <a href="#insertar-imagen" onClick={handleClick}>
            <img
              src={imagen}
              alt="Aca va tu imagen"
              className="crear-img img-fluid"
            />
          </a>
        </section>

        {/* Input para seleccionar la imagen (oculto) */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef} // Referencia al input file
          style={{ display: "none" }} // Ocultamos el input
          onChange={handleImageChange} // Maneja el cambio de imagen
        />
      </article>

      {/* Textarea para el Contenido */}
      <span className="texto-crear p-3">
        <textarea
          className="form-control contenido-crear"
          id="contenido-crear"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          onInput={(e) =>
            (e.target.style.height = e.target.scrollHeight + "px")
          }
          placeholder="Aquí la nota, puedes agregar tanto texto, como código, como imágenes, dibujar y más"
          rows={5}
        />
      </span>
    </main>
  );
}

export default Crear;
