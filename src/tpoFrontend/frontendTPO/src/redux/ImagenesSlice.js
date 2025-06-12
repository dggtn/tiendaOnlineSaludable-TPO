import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImagenesProducto = createAsyncThunk(
    "imagenes/fetchImagenesProducto",
    async (id) => {
        const { data } = await axios.get(`http://localhost:4002/productos/${id}/imagenes`);
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
        });
    },
});

export default imagenesSlice.reducer;
