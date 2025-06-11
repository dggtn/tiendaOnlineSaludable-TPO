import { configureStore } from "@reduxjs/toolkit";
import productosReducer from "./productoSlice";
import categoriaReducer from "./categoriasSlice";
import usuarioReducer from "./usuariosSlice";

export const store = configureStore({
  reducer: {
    productos: productosReducer,
    categorias: categoriaReducer,
    usuarios: usuarioReducer,
  },
});

//puedo administarr distintas partes del estado de forma separada, cada slice se ocupa de una area especifica de la logica de la app ,asi  su estado esta disponible de forma global