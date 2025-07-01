import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategorias } from "../redux/categoriasSlice";
import { CreateProductos } from "../redux/productoSlice";

export default function CrearProductoForm() {
  const dispatch = useDispatch();
  const { items: categorias = [], loading: loadingCategorias = false } = useSelector(
    (state) => state["categorias"] || {}
  );
  const { accessToken } = useSelector((state) => state["auth"] || { accessToken: null });
  const { loading: loadingProducto = false, error: errorProducto = null } = useSelector(
    (state) => state["productos"] || {}
  );

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchCategorias());
  }, [dispatch, accessToken]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!nombre.trim() || !descripcion.trim()) {
      toast.warn("Por favor, completá todos los campos antes de crear el producto.", {
        position: "top-center",
      });
      return;
    }
    if (isNaN(Number(precio)) || Number(precio) <= 0) {
      toast.warn("El precio debe ser mayor a 0.", {
        position: "top-center",
      });
      return;
    }
    if (isNaN(Number(cantidad)) || Number(cantidad) < 0) {
      toast.warn("La cantidad (stock) no puede ser negativa.", {
        position: "top-center",
      });
      return;
    }
    const argumentos = {
      newProducto: {
        nombre,
        descripcion,
        cantidad,
        precio,
        categoria: { id: categoria },
      },
      accessToken,
    };
    // @ts-ignore
    const action = await dispatch(CreateProductos(argumentos));
    if (CreateProductos.fulfilled.match(action)) {
      toast.success("Producto creado con éxito.", {
        position: "top-center",
      });
      setNombre("");
      setDescripcion("");
      setCantidad("");
      setPrecio("");
      setCategoria("");
    } else if (CreateProductos.rejected.match(action)) {
      toast.error("Error: No se pudo crear el producto.", {
        position: "top-center",
      });
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-[500px] md:w-[700px] xl:w-[900px] p-10 bg-white rounded-2xl shadow-2xl mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <h3 className="mb-4 text-2xl font-bold text-center text-lime-800 col-span-1 md:col-span-2">
          Crear nuevo producto
        </h3>
        {loadingProducto && (
          <div className="col-span-2 text-center text-lime-700 font-semibold">
            Creando producto...
          </div>
        )}
        {errorProducto && (
          <div className="col-span-2 text-center text-red-600 font-semibold">
            {errorProducto}
          </div>
        )}

        <div className="flex flex-col">
          <label
            className="mb-1 font-semibold text-gray-700"
            htmlFor="nombre-input"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre-input"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
          />
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 font-semibold text-gray-700"
            htmlFor="precio-input"
          >
            Precio
          </label>
          <input
            id="precio-input"
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
          ></input>
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 font-semibold text-gray-700"
            htmlFor="cantidad-input"
          >
            Cantidad
          </label>
          <input
            id="cantidad-input"
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
          ></input>
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 font-semibold text-gray-700"
            htmlFor="categoria-input"
          >
            Elige una categoria:{" "}
          </label>
          <select
            onChange={(e) => setCategoria(e.target.value)}
            id="categoria-input"
            value={categoria}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
          >
            <option value="">Categorias</option>
            {categorias.length > 0 &&
              categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.descripcion}
                </option>
              ))}
          </select>
        </div>

        <div className="flex flex-col md:col-span-2">
          <label
            className="mb-1 font-semibold text-gray-700"
            htmlFor="descripcion-input"
          >
            Descripcion
          </label>
          <textarea
            id="descripcion-input"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500 transition resize-none"
          ></textarea>
        </div>

        <div className="flex justify-center md:col-span-2 mt-6">
          <button
            type="submit"
            className="text-brown-200 px-6 py-3 rounded font-bold text-lg bg-green-600 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
            disabled={loadingProducto}
          >
            {loadingProducto ? "Creando..." : "Crear"}
          </button>
        </div>
      </form>
    </>
  );
}
