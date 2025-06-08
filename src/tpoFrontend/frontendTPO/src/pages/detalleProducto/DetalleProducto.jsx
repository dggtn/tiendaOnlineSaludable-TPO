import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CarruselProducto from './componentes/CarrouselProducto';
import InformacionProducto from './componentes//InformacionProducto';
import { toast } from 'react-toastify';

export default function DetalleProducto({carrito}) {
  const navigate = useNavigate()
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [imagenes, setImagenes] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    async function fetchProducto() {
      const response = await fetch(`http://localhost:4002/productos/${id}`);
      const data = await response.json();
      setProducto(data);
    }

    async function fetchImagenes() {
      const response = await fetch(`http://localhost:4002/productos/${id}/imagenes`);
      const data = await response.json();
      setImagenes(data);
    }

    fetchProducto();
    fetchImagenes();
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  const agregarAlCarrito = () => {
  if (cantidad === 0) {
    toast.warning("Debes seleccionar al menos 1 unidad para agregar al carrito.", {
      position: 'top-center',
    });
    return;
  }
  
  if (producto) {
    carrito.agregar(cantidad, producto)
    toast.success(`${producto.nombre} ha sido agregado a tu carrito`, {
      position: 'top-center',
    })
    navigate('/carrito')
  }
};


  return (
    <main className="flex justify-center p-4 sm:p-10 max-w-screen-xl mx-auto bg-brown-100">
      <div className="flex flex-col lg:flex-row gap-10 bg-brown-200 shadow-2xl rounded-xl p-6 lg:p-10 min-w-full lg:min-w-[900px] min-h-[600px]">
        <CarruselProducto imagenes={imagenes} />
        <InformacionProducto
          producto={producto}
          cantidad={cantidad}
          setCantidad={setCantidad}
          agregarAlCarrito={agregarAlCarrito}
          carrito={carrito}
        />
      </div>
    </main>
  );
}
