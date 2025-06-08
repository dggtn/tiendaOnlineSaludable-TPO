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
    <div className="max-w-screen-xl   bg-green-100">
      <form className="flex items-center" action="/productos" onSubmit={buscar}>
        <div className="relative w-full">
          <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3  bg-green-400 "></span>
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
          className="bi bi-search py-2.5 px-3 ml-2 text-sm font-semibold text-brown-400 bg-green-100 rounded-lg border border-green-300 hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        >
          BUSCAR
        </button>
      </form>
    </div>
  );
}
