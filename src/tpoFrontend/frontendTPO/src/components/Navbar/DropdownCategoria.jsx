import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function DropdownCategoria({ items }) {
  const [abierto, setAbierto] = useState(false);
  const dropdownRef = useRef(null);
  const activeStyle = "underline underline-offset-4";

  // Efecto para cerrar al hacer clic fuera
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
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggle}
        className="flex items-center justify-between w-full py-2 px-3 text-lime-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-lime-900 md:w-auto dark:text-lime-900 md:dark:hover:text-lime-900 dark:focus:text-lime-900 dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      >
        Tienda
        <svg
          className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
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
        <div className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <NavLink
                to="/productos"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                 onClick={() => setAbierto(!abierto)}
              >
                Ver todos
              </NavLink>
              {items?.map((item, indice) => (
                <NavLink
                  to={`/productos?categoria=${item.descripcion}`}
                  key={indice}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setAbierto(!abierto)}
                >
                  {item.descripcion}
                </NavLink>
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
