import React from "react";
import { Link } from "react-router-dom";

export default function Banner2() {
  return (
    <section className="bg-green-100  text-brown-400 py-20 px-6 text-center rounded mb-20">
      <h1 className="text-5xl trgb(110 177 32) font-bold mb-4 animate-pulse">Fresco. Local. Orgánico.</h1>
      <p className="text-3xl max-w-2xl mx-auto mb-8 text-brown-200 font-bold trgb(110 177 32)  mt-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 ">
        Trae la naturaleza a la puerta de tu casa{" "}
      </p>
      <Link
        to="/productos"
        type="button"
        className="   text-brown-200 font-extrabold  rounded-lg text-base px-5 py-2.5 mr-2 mb-2 bg-green-600 hover:text-green-700 "
      >
        Ver productos
      </Link>
    </section>
  );
}
