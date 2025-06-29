import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = `http://localhost:4002/productos`;

export const fetchProductos = createAsyncThunk(
  "productos/fetchProductos",
  async (categoria) => {
    let url = URL
    if(categoria !== null  && categoria !== ""){
      url = `${URL}?categoria=${categoria}`
    }
  const { data } =  await axios.get(url);
    return  data;
  }
);

export const CreateProductos = createAsyncThunk(
  "productos/CrearProductos",
  async ({ newProducto, accessToken }) => {
    const { data } = await axios.post(URL, newProducto, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }
);

export const editarProducto = createAsyncThunk(
  "productos/actualizarProductos",
  async ({ productoActualizado, token }) => {
    const { id, nombre, descripcion, cantidad, categoria_id, precio } =
      productoActualizado;
    const { data } = await axios.put(
      `${URL}/${id}`,
      { nombre, descripcion, cantidad, categoria_id, precio },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  }
);

export const filtrarProducto = createAsyncThunk(
  "filtro/filtrarCategorias",
  async (categoria) => {
    const { data } = await axios.get(
      `http://localhost:4002/productos?categoria=${categoria.nombre}`
    );
    return data;
  }
);

export const eliminarProducto = createAsyncThunk(
  "productos/eliminarProducto",
  async ({ id, token }) => {
    await axios.delete(`${URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return id;
  }
);

const productoSlice = createSlice({
  name: "productos",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(CreateProductos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CreateProductos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, action.payload];
      })

      .addCase(CreateProductos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(editarProducto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editarProducto.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(editarProducto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(eliminarProducto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(eliminarProducto.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (producto) => producto.id !== action.payload
        );
      })
      .addCase(eliminarProducto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(filtrarProducto.pending,(state)=>{
        state.loading = true;
        state.error = null;
      })
       .addCase(filtrarProducto.fulfilled,(state, action)=>{
        state.loading = false;
        state.items = action.payload;
      })
       .addCase(filtrarProducto.rejected,(state, action)=>{
        state.loading = true;
        state.error = null; state.error = action.error.message;
      });
  },
});

export default productoSlice.reducer;
