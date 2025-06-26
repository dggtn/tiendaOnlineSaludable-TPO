import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CarruselProducto from './componentes/CarrouselProducto';
import InformacionProducto from './componentes//InformacionProducto';
import { toast } from 'react-toastify';

import { useSelector } from 'react-redux';
import { store } from '../../redux/store';
import { fetchProductoById } from '../../redux/ProductoDetalleSlice';
import { fetchImagenesProducto } from '../../redux/ImagenesSlice';
import { agregarItem } from '../../redux/carritoSlice';


export default function DetalleProducto() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [cantidad, setCantidad] = useState(0);

  const dispatch = store.dispatch;

  // Tipar correctamente los selectores para evitar errores de acceso
  // @ts-ignore
  const { item: producto, loading: loadingProducto } = useSelector(
    (state) => state["productoDetalle"]
  );

  const { items: imagenes, loading: loadingImagenes } = useSelector(
    (state) => state["imagenes"]
  );

  // Obtener imágenes por id (igual que en CardProducto)
  const imagenesProducto = imagenes[String(id)] || [];


  useEffect(() => {
    const idNum = Number(id);
    if (!isNaN(idNum) && idNum > 0) {
      // @ts-ignore
      dispatch(fetchProductoById(idNum));
      // @ts-ignore
      dispatch(fetchImagenesProducto(idNum));
    }
  }, [dispatch, id]);


  if (loadingProducto || loadingImagenes) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-400 border-solid"></div>
        <span className="ml-4 text-green-400 font-medium">Cargando...</span>
      </div>
    );
  }


  const agregarAlCarrito = () => {
  if (cantidad === 0) {
    toast.warning("Debes seleccionar al menos 1 unidad para agregar al carrito.", {
      position: 'top-center',
    });
    return;
  }
  
  if (producto) {
    dispatch(agregarItem({cantidad:cantidad,producto:producto}))
    toast.success(`${producto.nombre} ha sido agregado a tu carrito`, {
      position: 'top-center',
    })
    navigate('/carrito')
  }
};


  return (
    <main className="flex justify-center p-4 sm:p-10   bg-brown-100">
      <div className="flex flex-col lg:flex-row gap-10 bg-brown-200 shadow-2xl rounded-xl p-6 lg:p-10 min-w-full lg:min-w-[900px] min-h-[600px]">
        <CarruselProducto imagenes={imagenesProducto} />
        {producto ?(<InformacionProducto
            producto={producto}
            cantidad={cantidad}
            setCantidad={setCantidad}
            agregarAlCarrito={agregarAlCarrito}
          />):(<p>Cargando producto...</p>)}
      </div>
    </main>
  );
}
