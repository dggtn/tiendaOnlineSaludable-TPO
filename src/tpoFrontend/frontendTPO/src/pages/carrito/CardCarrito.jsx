import ModalConfirmacion from "../../Admin/ModalConfirmacion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function CardCarrito({producto, cantidad, carrito}) {

  const [imagenUrl, setImagenUrl] = useState("")
  const[abierto,setAbierto] = useState(false)

    useEffect(() => {
        async function fetchImagenes() {
            try {
                const response = await fetch(`http://localhost:4002/productos/${producto.id}/imagenes`);
                const imagenes = await response.json();
                if (imagenes.length > 0) {
                    setImagenUrl(`data:image/jpeg;base64,${imagenes[0].imagenData}`);
                }
            } catch (error) {
                setImagenUrl("");
            }
        }
        fetchImagenes();
    }, []);

  

    function cerrar(){
      setAbierto(false)

    }

function eliminarProducto() { 
  carrito.eliminarPorId(producto.id)
}

  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
        <Link to={`productos/${producto.id}`}>
          <img
            className="w-32 rounded"
            src={imagenUrl}
            alt={producto.nombre}
          />
        </Link>
        <div className="">
          <Link to={`productos/${producto.id}`}>
            <p className="text-lg ml-2 dark:text-slate-200">
              {producto.nombre} x {cantidad}
            </p>
          </Link>
          <button onClick={()=>setAbierto(true)} className="text-base ml-2 text-red-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </button>
        </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>(precio unitario: ${producto.precio}) - </span>
        <span>${producto.precio * cantidad}</span>
      </div>
      <ModalConfirmacion open={abierto} onClose={cerrar} onConfirm={eliminarProducto} mensaje={"Seguro quieres eliminar este producto"}   /> </div>
  );
}
