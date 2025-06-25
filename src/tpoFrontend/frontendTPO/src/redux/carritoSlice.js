import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = {
  items: [],
  estaVacio: true,
  total: 0,
  // Se puede agregar loading y error si se agregan operaciones asíncronas en el futuro
};

const calcularTotal = (items) => {
  return items.reduce((acumulado, item) => {
    return acumulado + item.producto.precio * item.cantidad;
  }, 0);
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
      state.total = calcularTotal(state.items);
    },
    vaciar: (state, action) => {
      state.items = [];
      state.estaVacio = true;
      state.total = 0;
    },
    eliminar: (state, action) => {
      state.items = state.items.filter(
        (item) => item.producto.id !== action.payload
      );
      if (state.items.length <= 0) {
        state.total = 0;
        state.estaVacio = true;
      } else {
        state.total = calcularTotal(state.items);
      }
    },
    incrementar: (state, action) => {
      let item = state.items.find((item) => item.producto.id == action.payload);
      if (item && item.cantidad < item.producto.cantidad) {
        item.cantidad++;
        state.total = calcularTotal(state.items);
      }
    },
    decrementar: (state, action) => {
      let item = state.items.find((item) => item.producto.id == action.payload);
      if (item) {
        item.cantidad--;
        if (item.cantidad <= 0) {
          state.items = state.items.filter(
            (i) => i.producto.id !== item.producto.id
          );
        }
        state.total = calcularTotal(state.items);
        state.estaVacio = state.items.length === 0;
      }
    },
  },
});
export const { agregarItem, vaciar, eliminar, incrementar, decrementar } =
  carritoSlice.actions;
export default carritoSlice.reducer;

//logica de no pasarse con stock
