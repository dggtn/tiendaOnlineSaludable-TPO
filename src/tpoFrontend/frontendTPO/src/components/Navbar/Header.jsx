import DropdownCategoria from "./DropdownCategoria";
import Buscador from "./Buscador";
import React, { useEffect, useState } from "react";
import { DropdownUsuarioLogueado } from "./DropdownUsuarioLogueado";
import { NavLink } from "react-router-dom";

export default function Header({ autenticacion }) {
  const [openNav, setOpenNav] = useState(false);
  const [categorias, setCategorias] = useState();
  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const [dropdownUsuario, setDropdownUsuario] = useState(false);

  useEffect(() => {
    async function fetchCategorias() {
      const response = await fetch(`http://localhost:4002/categorias`);
      const data = await response.json();
      setCategorias(data.content);
    }

    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    fetchCategorias();

    return () => {
      window.removeEventListener("resize", () => setOpenNav(false));
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const usuarioDropdown = document.querySelector(".dropdown-usuario");
      if (
        dropdownUsuario &&
        usuarioDropdown &&
        !usuarioDropdown.contains(e.target)
      ) {
        setDropdownUsuario(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropdownUsuario]);

  const clickEnBuscar = (e) => {
    e.preventDefault();
    setMostrarBuscador(!mostrarBuscador);
  };

  const toggleDropdownUsuario = (e) => {
    e.stopPropagation();
    setDropdownUsuario(!dropdownUsuario);
  };

  const cerrarSesion = () => {
    //setAuth({ logueado: false, email: "" });
    //setDropdownUsuario(false);
    window.location.href = "/";
  };

  return (
    <main>
      <nav className="drop-shadow-lg bg-brown-500   text-green-600 ">
        <div className="flex flex-wrap items-center justify-between p-4 ">
          <NavLink
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
           
            <span className="drop-shadow-lg self-center text-2xl font-semibold whitespace-nowrap hover:text-green-700 ">
              Tienda Online Saludable
            </span>
          </NavLink>

          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden "
            aria-controls="navbar-dropdown"
          >
            <span className="sr-only">Abrir menú</span>
            <svg
              className="w-6 h-6  bg-green-500  text-brown-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   items-center gap-2">
              <li className="flex items-center">
                <DropdownCategoria items={categorias} />
              </li>

              {autenticacion.logueado ? (
                <li className="relative list-none dropdown-usuario flex items-center">
                  <button
                    onClick={toggleDropdownUsuario}
                    className="flex items-center hover:text-green-700  gap-1"
                  >
                    {autenticacion.email}
                    <svg
                      className={`w-4 h-4 ms-2.5 transition-transform ${
                        dropdownUsuario ? "rotate-180" : ""
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
                  {dropdownUsuario && (
                    <DropdownUsuarioLogueado
                      setDropdown={setDropdownUsuario}
                      onLogout={cerrarSesion}
                    />
                  )}
                </li>
              ) : (
                <li className="flex items-center">
                 <NavLink to={"/sesion"} className="flex items-center hover:text-lime-700 dark:text-white dark:hover:text-lime-300">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-person-fill w-6 h-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </NavLink>
                </li>
              )}

              <li className="flex items-center">
                <button
                  onClick={clickEnBuscar}
                  className="hover:text-lime-700 dark:text-white dark:hover:text-lime-300 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-search w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </li>
              <li className="flex items-center">
                <NavLink
                  to={"/carrito"}
                  className="hover:text-lime-700 dark:text-white dark:hover:text-lime-300 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-cart-fill w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {mostrarBuscador && <Buscador />}
    </main>
  );
}
