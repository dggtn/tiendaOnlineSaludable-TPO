import React, { useEffect, useState } from "react";
import CardCarrito from "./CardCarrito";
import CheckOut from "./checkOut";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function ListaCarrito() {
  const { items,total } = useSelector((state) => state.carrito);
  const navigate = useNavigate();

  const [checkOut, setCheckOut] = useState(false);

  return (
    <>
      <section>
        <h1 className="text-center trgb(110 177 32)   text-brown-400 font-semibold text-4xl   ">
          Mi carrito
        </h1>
      </section>

      <section className="max-w-4xl m-auto bg-brown-200 rounded-lg ">
        {items.length > 0 &&
         items.map((item) => (
            <CardCarrito
              key={item.producto.id}
              producto={item.producto}
              cantidad={item.cantidad}
            />
          ))}
      </section>

      <section className="max-w-4xl m-auto bg-brown-200 rounded-lg ">
        <div className="flex flex-col p-2 border-b dark:border-brown-400 text-lg dark:text-brown-400">
          <p className="flex justify-between my-2">
            <span className="font-bold font-mono text-brown-400 text-2xl">
              Total
            </span>
            <span className="text-2xl text-brown-400 font-bold">${total}</span>
          </p>
        </div>
        <div className="flex justify-between my-2">
          <button
            className="hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800   bg-green-600  text-brown-200 font-semibold rounded-lg px-6 py-3 sm:px-8 sm:py-4 text-xl sm:text-2xl transition"
            onClick={() => navigate("/productos")}
          >
            Volver
          </button>
          <button
            onClick={() => setCheckOut(true)}
            type="button"
            className="hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800   bg-green-600  text-brown-200 font-semibold rounded-lg px-6 py-3 sm:px-8 sm:py-4 text-xl sm:text-2xl transition"
          >
            Pagar <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
      {checkOut && (
        <CheckOut
          setCheckOut={setCheckOut}
        />
      )}
    </>
  );
}
