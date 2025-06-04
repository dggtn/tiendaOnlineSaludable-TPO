import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function CrearProductoForm({ autenticacion }) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!nombre.trim() || !descripcion.trim()) {
      toast.warn("Por favor, completá todos los campos antes de crear el producto.", {
      position: 'top-center',
    });
      return;
    }

        try {
      const response = await fetch("http://localhost:4002/productos", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + autenticacion.accessToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          descripcion,
          cantidad,
          precio,
          categoria: { id: categoria },
        }),
      });

      if (response.ok) {
        toast.success("Producto creado con éxito.", {
      position: 'top-center',
    });
        setNombre("");
        setDescripcion("");
        setCantidad("");
        setPrecio("");
        setCategoria("");
      } else {
        const data = await response.json();
        toast.error("Error: No se pudo crear el producto.", {
      position: 'top-center',
    });
      }
    } catch (error) {
      toast.error("Error de conexión con el servidor.", {
      position: 'top-center',
    });
    }
  }
  
  useEffect(() => {
    async function fetchCategorias() {
      const response = await fetch(`http://localhost:4002/categorias`);
      const data = await response.json();
      setCategorias(data.content);
    }

    fetchCategorias();
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white rounded shadow"
      >
        <h2 className="text-2xl font-semibold mb-4 text-lime-700">
          Crear nuevo producto
        </h2>

        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="categorias"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
Elige una categoria:          </label>
          <select
            onChange={(e) => setCategoria(e.target.value)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
          >
            <option selected>Categorias</option>
            {categorias.length > 0 &&
              categorias.map((categoria) => (
                <option value={categoria.id}>{categoria.descripcion}</option>
              ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="block text-sm font-medium text-gray-700"
          >
            Cantidad
          </label>
          <textarea
            id="descripcion"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="block text-sm font-medium text-gray-700"
          >
            Descripcion
          </label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="block text-sm font-medium text-gray-700"
          >
            Precio
          </label>
          <textarea
            id="descripcion"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-700"
        >
          Crear
        </button>
      </form>
    </>
  );
}
