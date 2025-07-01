import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Buscador() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate()
  function buscar(e) {
    e.preventDefault();
    navigate("/productos?buscar=" + busqueda)
  }

  return (
    <div className="w-full bg-brown-200 p-2 rounded-lg">
      <form className="flex items-center" action="/productos" onSubmit={buscar}>
        <div className="relative w-full">
          <span className="bi bi-search absolute inset-y-0 left-0 flex items-center pl-3 text-green-700"></span>
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            name="buscar"
            type="text"
            id="simple-search"
            className=" text-brown-400 text-xl rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:focus:ring-green-500 dark:focus:border-lime-500"
            placeholder="Escribí acá lo que estás buscando"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors"
        >
          BUSCAR
        </button>
      </form>
    </div>
  );
}
