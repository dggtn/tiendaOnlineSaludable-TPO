import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = `http://localhost:4002/productos`;

export const fetchProductos = createAsyncThunk(
  "productos/fetchProductos",
  async () => {
    const { data } = await axios.get(URL);
    return data;
  }
);

export const CreateProductos = createAsyncThunk(
    "productos/CrearProductos",
    async (newProducto) => {
    const { data } = await axios.post(URL, newProducto);
    return data;
  }
);

export const editarProducto = createAsyncThunk("productos/actualizarProductos",async(productoActualizado)=>{
  const{id,nombre,descripcion,cantidad,categoria,precio} =  productoActualizado
  const{data}= await axios.put(`${URL}/${id}`,{nombre,descripcion,cantidad,categoria,precio})
  return data
})
const productoSlice = createSlice({
  name: "productos",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(CreateProductos.fulfilled,(state,action)=>{
        state.items = [... state.items,action.payload]

      })
      .addCase(editarProducto.fulfilled,(state,action)=>{
        const index = state.items.findIndex()

  })
}
});

export default productoSlice.reducer;
