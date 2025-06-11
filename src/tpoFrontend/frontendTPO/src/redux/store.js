import { configureStore } from "@reduxjs/toolkit";
import productoReducer  from "./productosSlice";

export const store = configureStore({
  reducer: {productos:productoReducer},
});

//puedo administarr distintas partes del estado de forma separada, cada slice se ocupa de una area especifica de la logica de la app ,asi  su estado esta disponible de forma global

