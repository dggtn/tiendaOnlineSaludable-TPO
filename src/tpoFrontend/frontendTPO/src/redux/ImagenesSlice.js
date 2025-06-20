import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImagenesProducto = createAsyncThunk(
    "imagenes/fetchImagenesProducto",
    async (id) => {
        const { data } = await axios.get(`http://localhost:4002/productos/${id}/imagenes`);
        return data;
    }
);

export const createImagen = createAsyncThunk(
    "imagenes/createImagen",
    async ({ id, imagenFile, token }) => {
        const formData = new FormData();
        formData.append("file", imagenFile);
        formData.append("productoId", id);

        const { data } = await axios.post(
            `http://localhost:4002/productos/${id}/imagen`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return data; 
    }
);



const imagenesSlice = createSlice({
    name: "imagenes",
    initialState: {
        items: [],
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
            state.items = action.payload;
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
            state.items = [...state.items, action.payload];
        })

        .addCase(createImagen.rejected, (state, action) => {
            state.loading = false;  
            state.error = action.error.message;
        });
    },
});

export default imagenesSlice.reducer;
