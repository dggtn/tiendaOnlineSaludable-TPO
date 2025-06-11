import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="drop-shadow-lg mt-500 bg-green-400   text-brown-100 ">
      <div >
        <div className="drop-shadow-lg mx-20 grid grid-cols-2 gap-12 px-16 py-6 lg:py-8 md:grid-cols-4 ">
          <div>
            <h2 className="drop-shadow-lg mb-6 text-sm font-semibold text-brown-500 uppercase dark:text-white">
              Tienda Online Saludable
            </h2>

            <ul className="drop-shadow-lg text-brown-500 font-medium">
              <li className="mb-4">
                <NavLink to={"nosotros"} className=" hover:underline">
                  Sobre nosotros
                </NavLink>
              </li>
              <li className="mb-4 drop-shadow-lg">
                <NavLink  to="/trabajaConNosotros" className="hover:underline">
                  Trabaja con nosostros
                </NavLink>
              </li>
              <li className="mb-4 drop-shadow-lg">
                <NavLink  to="/tiendas" className="hover:underline">
                  Nuestras tiendas
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <a   className="drop-shadow-lg mb-6 text-sm font-semibold text-brown-500 uppercase dark:text-white">
              Ayuda
            </a>
            <ul className="drop-shadow-lg  text-brown-500 font-medium">
              <li className="mb-4 mt-4 drop-shadow-lg">
                <NavLink  to="/" className="hover:underline">
                  Inicio
                </NavLink>
              </li>
              <li className="mb-4 drop-shadow-lg ">
                <NavLink to="/contactanos" className="hover:underline">
                  Contáctanos
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <a  className="drop-shadow-lg mb-6 text-sm font-semibold text-brown-500 uppercase dark:text-white">
              Legal
            </a>
            <ul className=" dark:text-brown-500 font-medium drop-shadow-lg">
              <li className="mb-4 mt-4 drop-shadow-lg">
                <NavLink to="/politicaPrivacidad" className="hover:underline text-brown-500">
                  Politica de privacidad
                </NavLink>
              </li>
              <li className="mb-4 drop-shadow-lg">
                <NavLink to="/licencia" className="hover:underline text-brown-500">
                  Licencia
                </NavLink>
              </li>
              <li className="mb-4 drop-shadow-lg">
                <NavLink to="condiciones" className="hover:underline text-brown-500">
                  Terminos &amp; Condiciones
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="drop-shadow-lg px-4 py-6 bg-brown-500 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-green-500 dark:text-brown-500sm:text-center">
            © 2025 TiendaOnline™. Todos los
            derechos reservados.
          </span>
          <div className="drop-shadow-lg flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="https://www.pinterest.com"
              rel="noopener noreferrer"
              target="_blank"
              className="drop-shadow-lg text-green-500 hover:text-green-500 dark:hover:text-green-500"
            >
              <svg
                className="w-4 h-4 bi bi-pinterest"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
              </svg>
              <span className="sr-only">Pinterest</span>
            </a>
            <a
              href="https://instagram.com"
              rel="noopener noreferrer"
              target="_blank"
              className="drop-shadow-lg text-green-500 hover:text-green-500 dark:hover:text-green-500"
            >
              <svg
                className="w-4 h-4 bi bi-instagram"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <span className="sr-only">Instagram </span>
            </a>
            <a
              href="https://www.gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="drop-shadow-lg text-green-500 hover:text-green-500 dark:hover:text-green-500"
            >
              <svg
                className="w-4 h-4 bi bi-envelope-at-fill"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
              </svg>
              <span className="sr-only">Mail </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}