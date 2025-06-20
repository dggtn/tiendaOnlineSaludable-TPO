import React from "react";
import CarritoVacio from "./CarritoVacio";
import ListaCarrito from "./ListaCarrito";
import { useSelector } from "react-redux";

export default function Carrito({ carrito }) {
  const { estaVacio } = useSelector((state) => state.carrito);
  return (
    <main className="bg-green-100">
      {estaVacio ? <CarritoVacio /> : <ListaCarrito carrito={carrito} />}
    </main>
  );
}
