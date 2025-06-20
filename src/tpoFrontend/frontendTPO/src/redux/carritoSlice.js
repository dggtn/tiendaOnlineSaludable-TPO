import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = {
  items: [],
  estaVacio: true,
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
    },
  },
});
export const { agregarItem } = carritoSlice.actions;
export default carritoSlice.reducer;



//logica de no pasarse con stock 