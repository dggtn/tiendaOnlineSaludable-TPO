import React from "react";
import CarritoVacio from "./CarritoVacio";
import ListaCarrito from "./ListaCarrito";
import { useSelector } from "react-redux";

export default function Carrito({ carrito }) {
  const state = useSelector((state) => state.carrito);
  console.log(state)
  return (
    <main className="bg-green-100">
      {state.estaVacio() ? (
        <CarritoVacio />
      ) : (
        <ListaCarrito carrito={carrito} />
      )}
    </main>
  );
}
