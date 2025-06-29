import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchCategorias } from "../../redux/categoriasSlice";
import { store } from "../../redux/store";

export default function DropdownCategoria() {
  const [abierto, setAbierto] = useState(false);
  const dropdownRef = useRef(null);

  const dispatch = store.dispatch;
  const { items: categorias, loading } = useSelector(
    (state) => state.categorias
  );

  useEffect(() => {
    dispatch(fetchCategorias());
  }, [dispatch]);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAbierto(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAbierto(!abierto);
  };

  return (
    <div
      className="relative rounded-sm bg-green-500 z-50 text-brown-200   "
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={toggle}
        className=" rounded-sm hover:text-green-700  text-brown-100 flex items-center justify-between w-11   hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-lime-900 md:w-auto dark:text-lime-900 md:dark:hover:text-lime-900 dark:focus:text-lime-900 dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      >
        Tienda
        <svg
          className={` w-2.5 h-2.5 ms-2.5 z-50 rounded-sm ${
            abierto ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {abierto && (
        <div className=" z-50   text-brown-100 bg-green-500   absolute  font-normal  divide-y divide-gray-100 rounded-lg ">
          <ul className="z-50  py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <NavLink
                to="/productos"
                className="z-50 bg-green-500  block px-4 py-2 text-brown-100 hover:text-green-700"
                onClick={() => setAbierto(!abierto)}
              >
                Ver todos
              </NavLink>
              {categorias?.map((categoria, indice) => (
                <NavLink
                  to={`/productos?categoria=${categoria.descripcion}`}
                  key={indice}
                  className="bg-green-500 z-50   hover:text-green-700 block px-4 py-2 text-brown-100 z-index"
                  onClick={() => setAbierto(!abierto)}
                >
                  {categoria.descripcion}
                </NavLink>
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
