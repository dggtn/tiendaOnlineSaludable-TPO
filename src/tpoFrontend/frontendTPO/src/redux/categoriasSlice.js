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

export const createCategoria = createAsyncThunk(
  "categoria/createCategoria",
  async ({ newCategoria, token }) => {
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

const categoriasSlice = createSlice({
  name: "categorias",
  initialState: {
    items: [], //coincide con el use state del fetch que hicimos,
    loading: false, //se puede agregar spinner o frase 'cargando'
    error: null, //los errores que ocurren se almacenan
  },
  reducers: {},
    //funciones permiten actualizar estado en forma sincrona ,llamadas api son sincronas van vacias}
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
        .addCase(createCategoria.fulfilled, (state,action) => {
            state.items = [...state.items, action.payload]
        })
        
        .addCase(createCategoria.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });

    },
  },
);
export default categoriasSlice.reducer;

//define como va a reaccionar slice a reacciones asincronas como fetch/post define que va a pasar cuando conecte a la api
//parametro es builder
