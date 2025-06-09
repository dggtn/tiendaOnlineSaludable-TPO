import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ titulo, items }) {
  const [abierto, setAbierto] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = (e) => {
    e.preventDefault();
    setAbierto(!abierto);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAbierto(false);
      }
    }
    if (abierto) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [abierto]);

  const activeStyle = "underline underline-offset-4";

  return (
    <div ref={dropdownRef} className="relative bg-green-600 rounded-lg ">
      <button
        type="button"
        onClick={toggle}
        id="dropdownNavbar"
              className="text-brown-200  rounded-lg text-base px-5 py-2.5 mr-2 mb-2 font-bold  bg-green-600 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
      >
        {titulo}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
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
        <div
          id="dropdownNavbar"
          className="bg-green-600 z-10 font-normal rounded-lg  divide-y divide-gray-100  shadow-sm w-44 dark:bg-gray-700 dark:divide-green-lime-900 absolute block"
        >
          <ul
            className="py-2 text-sm text-white rounded-lg "
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              {items.map((item, indice) => (
                <NavLink to={item.link} key={indice}>
                  <span
                    className="block px-4 py-2"
                    role="menuitem"
                    tabIndex={-1}
                    id={item.id}
                  >
                    {item.descripcion}
                  </span>
                </NavLink>
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
