import ModalConfirmacion from "../../Admin/ModalConfirmacion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { decrementar, eliminar, incrementar } from "../../redux/carritoSlice";
import { fetchImagenesProducto } from "../../redux/ImagenesSlice.js";

export default function CardCarrito({ producto, cantidad }) {
  const dispatch = useDispatch();
  // @ts-ignore
  const items = useSelector((state) => state.carrito?.items || []);
  // @ts-ignore
  const imagenes = useSelector((state) => state.imagenes.items[String(producto.id)] || []);
  const [abierto, setAbierto] = useState(false);
  const aumentar = () => {
    let itemEnCarrito = items.find((item) => item.producto.id === producto.id);
    const cantidadEnCarrito =
      itemEnCarrito === undefined ? 0 : itemEnCarrito.cantidad;
    //const maximo = producto.cantidad - cantidadEnCarrito;

    if (cantidad < producto.cantidad) {
      dispatch(incrementar(producto.id));
    } else {
      toast.info(`Solo hay ${producto.cantidad} unidades disponibles.`, {
        position: "top-center",
      });
    }
  };

  const reducir = () => {
    if (cantidad > 0) {
      dispatch(decrementar(producto.id));
    }
  };
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchImagenesProducto(producto.id));
  }, [dispatch, producto.id]);

  // Si imagenes es un array, usamos la primera imagen
  const imagenProductoObj = Array.isArray(imagenes) && imagenes.length > 0 ? imagenes[0] : null;
  const imagenUrl =
    imagenProductoObj && imagenProductoObj.imagenData
      ? `data:image/jpeg;base64,${imagenProductoObj.imagenData}`
      : "";

  function cerrar() {
    setAbierto(false);
  }

  function eliminarProducto() {
    dispatch(eliminar(producto.id));
  }

  return (
    <div className="flex flex-wrap justify-between border-b max-w-4xl m-auto p-2 mb-5 bg-brown-200  rounded-lg ">
      <div className="flex">
        <Link to={`/productos/${producto.id}`}>
          <img
            className="w-32 rounded mt-3"
            src={imagenUrl}
            alt={producto.nombre}
          />
        </Link>
        <div className="">
          <h2 className="text-center  ml-3 text-2xl mb-5 text-brown-400 font-bold mx-20 mt-3  ">
            {producto.nombre}
          </h2>

          <div className="flex items-center mb-5 px-3 py-2 sm:px-8 sm:py-4">
            <button
              onClick={reducir}
              className=" hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800  bg-green-600 font-bold text-white  text-brown-white rounded-lg px-3 py-2 sm:px-8 sm:py-4  transition"
              aria-label="Disminuir cantidad"
            >
              -
            </button>

            <span className="w-8 sm:w-[100px] h-auto py-3 sm:py-4 text-xl sm:text-2xl font-bold rounded-lg text-center bg-lime-100 text-lime-900">
              {cantidad}
            </span>

            <button
              onClick={aumentar}
              className=" hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 bg-green-600 font-bold text-white  text-brown-white rounded-lg px-3 py-2 sm:px-8 sm:py-4  transition"
              aria-label="Aumentar cantidad"
            >
              +
            </button>
          </div>
          <button
            onClick={() => setAbierto(true)}
            className="text-base   text-red-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3-fill size-10 mx-20"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </button>
        </div>
      </div>
      <div className="text-2xl font-bold m-2 text-brown-400">
        <span>${producto.precio * cantidad}</span>
      </div>
      <ModalConfirmacion
        open={abierto}
        onClose={cerrar}
        onConfirm={eliminarProducto}
        mensaje={"Seguro quieres eliminar este producto"}
      />{" "}
    </div>
  );
}
