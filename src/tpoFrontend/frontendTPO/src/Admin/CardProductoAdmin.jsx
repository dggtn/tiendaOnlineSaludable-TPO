import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImagenesProducto } from "../redux/ImagenesSlice.js";

export default function CardProductoAdmin({ producto, onEliminar, onEditar }) {
  const dispatch = useDispatch();

  const imagenes = useSelector((state) => state.imagenes.items[String(producto.id)] || []);

  useEffect(() => {

    dispatch(fetchImagenesProducto(producto.id));
  }, [dispatch, producto.id]);


  const imagenProductoObj = Array.isArray(imagenes) && imagenes.length > 0 ? imagenes[0] : null;
  const imagenUrl =
    imagenProductoObj && imagenProductoObj.imagenData
      ? `data:image/jpeg;base64,${imagenProductoObj.imagenData}`
      : "";

  return (
    <div className="transform rounded-xl shadow-xl transition duration-300 hover:scale-105 m-3 max-w-sm bg-brown-200  border  ">
      <div className="relative">
        <span className="absolute top-4 left-2 px-2  bg-brown-200  text-white rounded">
          {producto.categoria}
        </span>
        <img
          className="rounded-t-lg w-full h-64"
          src={imagenUrl}
          alt="imagen"
        />
      </div>
      <div className="p-5">
        {/* Nombre sin enlace */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight  text-brown-400 ">
          {producto.nombre}
        </h5>
        <p className="mb-3 font-normal  text-brown-400 ">
          {producto.descripcion}
        </p>
        <p className="flex justify-between items-center">
          <span className="text-2xl text-brown-400  font-bold mx-2">
            <span>$</span>
            <span>{producto.precio}</span>
          </span>
        </p>
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={() => onEditar(producto)}
            className="text-brown-200  rounded-lg text-base px-5 py-2.5 mr-2 mb-2 font-bold  bg-green-600 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
          >
            Editar
          </button>
          <button
            onClick={() => onEliminar(producto.id)}
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 focus:outline-none dark:focus:ring-red-800"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
