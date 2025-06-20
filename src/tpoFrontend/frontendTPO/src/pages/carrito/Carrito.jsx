import React from 'react'
import CarritoVacio from './CarritoVacio';
import ListaCarrito from './ListaCarrito';


export default function Carrito({ carrito}) {
  return (
     <main className='bg-green-100'>
        { carrito.tieneItems() ? <ListaCarrito carrito={carrito}/>:<CarritoVacio/> }
    </main>
  )
}
