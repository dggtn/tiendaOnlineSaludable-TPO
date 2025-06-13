import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const URL = `http://localhost:4002/usuarios`;

export const fetchUsuarios = createAsyncThunk(
  "usuarios/fetchUsuarios",
  async ({accessToken}, {rejectWithValue}) => {
    const { data } = await axios.get(URL);
    return data;
  }
);

const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: {
    items: [], //coincide con el q use state del fetch que hicimos,
    loading: false, //se puede agregar spinner o frase 'cargando'
    error: null, //los errores que ocurren se almacenan
  },
  reducers: {},
    //funciones permiten actualizar estado en forma sincrona ,llamadas api son sincronas van vacias}
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
          state.error = action.error.message;
        });
    },
  },
);
export default usuariosSlice.reducer;

//define como va a reaccionar slice a reacciones asincronas como fetch/post define que va a pasar cuando conecte a la api
//parametro es builder
