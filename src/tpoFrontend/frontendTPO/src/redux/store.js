import { configureStore } from "@reduxjs/toolkit";
import productosReducer from "./productoSlice";
import categoriaReducer from "./categoriasSlice";
import usuarioReducer from "./usuariosSlice";
import productoDetalleReducer from "./ProductoDetalleSlice";
import imagenesReducer from "./ImagenesSlice";
import authReducer from "./autenticacionSlice";
import carritoReducer from "./carritoSlice";

import pedidoReducer from "./pedidoSlice";

export const store = configureStore({
  reducer: {
    productos: productosReducer,
    categorias: categoriaReducer,
    usuarios: usuarioReducer,
    productoDetalle: productoDetalleReducer,
    imagenes: imagenesReducer,
    auth: authReducer,
    carrito: carritoReducer,
    pedido: pedidoReducer,
  },
});

//puedo administarr distintas partes del estado de forma separada, cada slice se ocupa de una area especifica de la logica de la app ,asi  su estado esta disponible de forma global
