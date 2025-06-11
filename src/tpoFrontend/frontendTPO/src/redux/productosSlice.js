import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const fetchProductos = createAsyncThunk("productos/fetchProductos",async()=>{
    const {data} = await axios.get(`http://localhost:4002/productos`)
    return data
    
} )

const productoSlice = createSlice({
    name: "productos",
    initialState:{
        items:[], //coincide con el use state del fetch que hicimos,
        loading: false, //se puede agregar spinner o frase 'cargando'
        error: null //los errores que ocurren se almacenan
    },
       reducers:{//funciones permiten actualizar estado en forma sincrona ,llamadas api son sincronas van vacias}
        extraReducers: (builder)=>{
            builder//define como va a reaccionar slice a reacciones asincronas como fetch/post define que va a pasar cuando conecte a la api
                       //parametro es builder
                       .addCase(fetchProductos.pending,(state)=>{
                        state.loading=true;
                        state.error=null

                       })
                       .addCase(fetchProductos.fulfilled,(state,action)=>{
                        state.loading=fasle;
                        sate.items = action.payload
                       })

        }

})