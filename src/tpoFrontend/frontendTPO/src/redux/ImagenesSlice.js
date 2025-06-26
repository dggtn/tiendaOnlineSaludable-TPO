import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImagenesProducto = createAsyncThunk(
    "imagenes/fetchImagenesProducto",
    async (id) => {
        const { data } = await axios.get(`http://localhost:4002/productos/${id}/imagenes`);
        return data;
    }
);

/**
 * @typedef {Object} ImagenArgs
 * @property {string|number} id
 * @property {File} imagenFile
 * @property {string} token
 */
export const createImagen = createAsyncThunk(
    "imagenes/createImagen",
    /**
     * @param {ImagenArgs} payload
     * @param {Object} thunkAPI
     */
    async (payload, { rejectWithValue }) => {
        if (!payload || !payload.id || !payload.imagenFile || !payload.token) {
            return rejectWithValue("Faltan datos para subir la imagen");
        }
        try {
            const formData = new FormData();
            formData.append("file", payload.imagenFile);
            formData.append("productoId", payload.id.toString());
            const { data } = await axios.post(
                `http://localhost:4002/productos/${payload.id}/imagen`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${payload.token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

const imagenesSlice = createSlice({
    name: "imagenes",
    initialState: {
        items: {}, // Cambiamos a objeto para guardar por id de producto
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchImagenesProducto.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchImagenesProducto.fulfilled, (state, action) => {
            state.loading = false;
            // Validamos que action.meta.arg exista y lo forzamos a string
            if (action.meta && action.meta.arg !== undefined && action.meta.arg !== null) {
                state.items[String(action.meta.arg)] = action.payload;
            }
        })
        .addCase(fetchImagenesProducto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(createImagen.pending, (state) => {
            state.loading = true;   
            state.error = null;    
        })
        .addCase(createImagen.fulfilled, (state, action) => {
            state.loading = false;
            // Opcional: podrías agregar la imagen al array correspondiente
        })
        .addCase(createImagen.rejected, (state, action) => {
            state.loading = false;  
            state.error = action.payload || action.error.message;
        });
    },
});

export default imagenesSlice.reducer;
