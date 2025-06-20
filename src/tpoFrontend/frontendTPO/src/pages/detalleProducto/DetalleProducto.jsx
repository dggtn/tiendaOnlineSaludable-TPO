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

  const { item: producto, loading: loadingProducto } = useSelector(
    (state) => state.productoDetalle
  );

  const { items: imagenes, loading: loadingImagenes } = useSelector(
    (state) => state.imagenes
  );


  useEffect(() => {
    if (id) {
      dispatch(fetchProductoById(id));
      dispatch(fetchImagenesProducto(id));
    }
  }, [dispatch, id]);


  if (loadingProducto || loadingImagenes) {
    return <p>Cargando producto...</p>;
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
        <CarruselProducto imagenes={imagenes} />
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
