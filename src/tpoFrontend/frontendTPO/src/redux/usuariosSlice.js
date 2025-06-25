import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = `http://localhost:4002/usuarios/registrados`;

export const fetchUsuarios = createAsyncThunk(
  "usuarios/fetchUsuarios",
  async (accessToken, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Aquí puedes agregar futuros thunks para crear, editar y eliminar usuarios

const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsuarios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsuarios.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsuarios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});
export default usuariosSlice.reducer;
