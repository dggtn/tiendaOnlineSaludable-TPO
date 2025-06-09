import React from "react";
import { Link } from "react-router-dom";

export default function CarritoVacio() {
  return (
    <section className="bg-green-100 text-xl text-center max-w-4xl mx-auto   py-5 dark:text-brown-400 border border-none">
      <div className="h-60">
        <p className="bi bi-cart  mb-5"></p>
        <p className="text-brown-400 text-4xl">Tu carrito esta vacio!</p>
        <p className="text-brown-400 text-4xl mb-8">Agrega productos a tu carrito</p>
      
      <Link
        to="/productos"
        type="button"
              className="text-brown-200  rounded-lg text-base px-5 py-2.5 mr-2 mb-2 font-bold  bg-green-600 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
      >
        Comprar productos <i className="ml-2 bi bi-cart"></i>
      </Link>
      </div>
    </section>
  );
}
