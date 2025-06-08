import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CardProducto(props) {
  const [imagenUrl, setImagenUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchImagenes() {
      const response = await fetch(
        `http://localhost:4002/productos/${props.producto.id}/imagenes`
      );
      const imagenes = await response.json();
      if (imagenes.length > 0) {
        setImagenUrl(`data:image/jpeg;base64,${imagenes[0].imagenData}`);
      }
    }
    fetchImagenes();
  }, []);

  function agregarAlCarrito() {
    navigate(`/productos/${props.producto.id}`);
  }

  const sinStock =
    props.producto.cantidad -
      props.carrito.obtenerCantidadSeleccionada(props.producto.id) ===
    0;

  const imagenProducto = () => (
    <>
      <span className="absolute top-4 left-2 px-2 bg-brown-400 bg-opacity-90 text-white rounded">
        {props.producto.categoria}
      </span>
      <img
        className="rounded-t-lg w-full h-64"
        src={imagenUrl}
        alt="imagen"
      ></img>
    </>
  );

  return (
    <div className="pb-4 m-3 max-w-sm bg-brown-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {sinStock ? (
        imagenProducto()
      ) : (
        <NavLink to={`/productos/${props.producto.id}`} className="relative">
          {imagenProducto()}
        </NavLink>
      )}
      <div className="p-5">
        <Link to={`/productos/${props.producto.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-brown-400 ">
            {props.producto.nombre}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-brown-400 ">
          {props.producto.descripcion}
        </p>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200 mx-2">
            <span>$</span>
            <span>{props.producto.precio}</span>
          </span>

          {sinStock ? (
            <button
              type="button"
              disabled
              className="text-white font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 bg-gray-400 cursor-not-allowed"
            >
              No hay stock disponible
            </button>
          ) : (
            <button
              type="button"
              onClick={agregarAlCarrito}
              className="text-brown-200  rounded-lg text-base px-5 py-2.5 mr-2 mb-2 font-bold  bg-green-600 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
            >
              Agregar al carrito <i className="ml-1 bi bi-plus-lg"></i>
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
