import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const URL = `http://localhost:4002/categorias`;

export const fetchCategorias = createAsyncThunk(
  "categorias/fetchCategorias",
  async () => {
    const { data } = await axios.get(URL);
    return data.content;
  }
);

/**
 * @typedef {Object} CategoriaThunkArgs
 * @property {Object} newCategoria
 * @property {string} token
 */

export const createCategoria = createAsyncThunk(
  "categoria/createCategoria",
  /**
   * @param {CategoriaThunkArgs} payload
   */
  async (payload) => {
    if (!payload || !payload.newCategoria || !payload.token) {
      throw new Error("Faltan datos para crear la categoría");
    }
    const { newCategoria, token } = payload;
    const { data } = await axios.post(
      URL,
      newCategoria,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  }
);

export const updateCategoria = createAsyncThunk(
  "categoria/updateCategoria",
  /**
   * @param {{id: number, descripcion: string, token: string}} payload
   */
  async (payload) => {
    if (!payload || !payload.id || !payload.descripcion || !payload.token) {
      throw new Error("Faltan datos para actualizar la categoría");
    }
    const { id, descripcion, token } = payload;
    const { data } = await axios.put(
      `${URL}/${id}`,
      { descripcion },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  }
);

const categoriasSlice = createSlice({
  name: "categorias",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategorias.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategorias.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategorias.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCategoria.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategoria.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(createCategoria.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateCategoria.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategoria.fulfilled, (state, action) => {
        state.loading = false;
        // Actualiza la categoría en el array
        const idx = state.items.findIndex((cat) => cat.id === action.payload.id);
        if (idx !== -1) {
          state.items[idx] = action.payload;
        }
      })
      .addCase(updateCategoria.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriasSlice.reducer;
