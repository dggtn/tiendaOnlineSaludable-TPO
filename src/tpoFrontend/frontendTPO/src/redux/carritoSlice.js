import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = {
  items: [],
  estaVacio: function () {
    return this.items.length == 0;
  },
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
    },
  },
});
export const { agregarItem } = carritoSlice.actions;
export default carritoSlice.reducer;
