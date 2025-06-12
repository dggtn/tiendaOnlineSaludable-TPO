import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductoById = createAsyncThunk(
    "productoDetalle/fetchProductoById",
    async (id) => {
        const { data } = await axios.get(`http://localhost:4002/productos/${id}`);
        return data;
    }
);

const productoDetalleSlice = createSlice({
    name: "productoDetalle",
    initialState: {
        item: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductoById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProductoById.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.payload;
        })
        .addCase(fetchProductoById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default productoDetalleSlice.reducer;