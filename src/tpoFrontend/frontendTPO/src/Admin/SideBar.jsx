import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const opcionesCategorias = [
    {
      descripcion: "Crear categoria",
      link: "/admin/categorias/nueva",
    },
    {
      descripcion: "Ver categorias",
      link: "/admin/categorias",
    },
  ];
  const opcionesProductos = [
    {
      descripcion: "Crear Producto",
      link: "/admin/productos/nuevo",
    },
    {
      descripcion: "Ver productos",
      link: "/admin/productos",
    },
  ];

  function onLogout(event) {
    window.location.href = "/sesion";
  }

  return (
    <div className="mt-20 flex h-full w-full max-w-[20rem] flex-col  rounded-xl mb-8 bg-clip-border p-4 bg-brown-50 shadow-xl shadow-lime-gray-900/5">
      <div className="p-4 mb-2">
        <h5 className="text-brown-200 font-bold block font-sans text-xl antialiased  leading-snug tracking-normal">
          Menu
        </h5>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal ">
        <div className="relative block w-full">
          <div
            role="button"
              className="text-green-600  rounded-lg text-base px-5 py-2.5 mr-2 mb-2 font-bold "
          >
            <button
              type="button"
              className="text-green-600  rounded-lg text-base px-5 py-2.5 mr-2 mb-2 font-bold "
            >
              <div className="grid mr-4 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="block mr-auto font-sans text-base antialiased font-normal leading-relaxed ">
                TiendaOnlineSaludable
              </p>
            </button>
          </div>
          <div className="overflow-hidden">
            <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal ">
              <nav className="rounded-xl flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-lime-gray-700">
                <Dropdown
                  titulo="Productos"
                  items={opcionesProductos}
                ></Dropdown>

                <Dropdown
                  titulo="Categorias"
                  items={opcionesCategorias}
                ></Dropdown>

                <NavLink to="/admin/usuarios">
                  <h1
                    className=" text-green-600 font-extrabold rounded-lg
                    text-base px-5 py-2.5 mr-2 mb-2 "> Usuarios
                  </h1>
                </NavLink>
                <div>
                  <ul>
                    <li>
                      <button
              className="text-brown-200  rounded-lg text-base px-5 py-2.5 mr-2 mb-2 font-bold  bg-green-600 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
                        onClick={onLogout}
                      >
                        Cerrar Sesión
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
