import React from 'react'
import CarritoVacio from './CarritoVacio';
import ListaCarrito from './ListaCarrito';


export default function Carrito({autenticacion, carrito}) {
  return (
     <main>
        { carrito.tieneItems() ? <ListaCarrito autenticacion={autenticacion} carrito={carrito}/>:<CarritoVacio/> }
    </main>
  )
}
