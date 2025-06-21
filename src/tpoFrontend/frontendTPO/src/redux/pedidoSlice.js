import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:4002/pedidos/comprar";

export const comprarPedido = createAsyncThunk(
    "pedido/comprarPedido",
    async ({ pedido, token }) => {
        const { data } = await axios.post(
            URL,
            pedido,
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

const pedidoSlice = createSlice({
    name: "pedido",
    initialState: {
        loading: false,
        error: null,
        success: false,
    },
    
    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(comprarPedido.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        })
        .addCase(comprarPedido.fulfilled, (state) => {
            state.loading = false;
            state.success = true;
        })
        .addCase(comprarPedido.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});

export default pedidoSlice.reducer;
