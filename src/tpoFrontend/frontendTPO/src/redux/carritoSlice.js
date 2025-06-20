import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = {
  items: [],
  estaVacio: true,
  total: 0,
};

export const carritoSlice = createSlice({
  name: "carrito",
  initialState: estadoInicial,
  reducers: {
    agregarItem: (state, action) => {
      let itemEnCarrito = state.items.find(
        (item) => item.producto.id === action.payload.producto.id
      );
      if (itemEnCarrito !== undefined) {
        itemEnCarrito.cantidad += action.payload.cantidad;
      } else {
        state.items.push({
          cantidad: action.payload.cantidad,
          producto: action.payload.producto,
        });
      }
      state.estaVacio = false;
      state.total = state.items.reduce((acumulado, item) => {
        return acumulado + item.producto.precio * item.cantidad;
      }, 0);
    },
    vaciar: (state, action) => {
      state = estadoInicial;
    },
    eliminar: (state, action) => {
      console.log(action)
      state.items = state.items.filter(
        (item) => item.producto.id !== action.payload
      );
      if (state.items.length <= 0) {
        state.total = 0;
        state.estaVacio = true;
      } else {
        state.total = state.items.reduce((acumulado, item) => {
          return acumulado + item.producto.precio * item.cantidad;
        }, 0);
      }
    },
  },
});
export const { agregarItem, vaciar,eliminar } = carritoSlice.actions;
export default carritoSlice.reducer;

//logica de no pasarse con stock
