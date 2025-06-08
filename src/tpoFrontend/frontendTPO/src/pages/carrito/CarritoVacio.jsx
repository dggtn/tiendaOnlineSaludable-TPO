import React from "react";
import { Link } from "react-router-dom";

export default function CarritoVacio() {
  return (
    <section className="bg-green-100 text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-brown-400 border border-none">
      <div className="my-5">
        <p className="bi bi-cart text-brown-40 text-7xl mb-5"></p>
        <p>Tu carrito esta vacio!</p>
        <p>Agrega productos a tu carrito</p>
      </div>
      <Link
        to="/productos"
        type="button"
        className="text-brown-400 bg-green-100  font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800"
      >
        Comprar productos <i className="ml-2 bi bi-cart"></i>
      </Link>
    </section>
  );
}
