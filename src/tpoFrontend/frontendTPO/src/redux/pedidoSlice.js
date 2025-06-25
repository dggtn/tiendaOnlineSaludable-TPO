import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:4002/pedidos/comprar";

/**
 * @typedef {Object} PedidoThunkArgs
 * @property {Object} pedido
 * @property {string} token
 */

export const comprarPedido = createAsyncThunk(
    "pedido/comprarPedido",
    /**
     * @param {PedidoThunkArgs} payload
     * @param {Object} thunkAPI
     */
    async (payload, { rejectWithValue }) => {
        if (!payload || !payload.pedido || !payload.token) {
            return rejectWithValue("Faltan datos para realizar la compra");
        }
        const { pedido, token } = payload;
        try {
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
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
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
            state.error = action.payload || action.error.message;
            state.success = false;
        });
    },
});

export default pedidoSlice.reducer;
