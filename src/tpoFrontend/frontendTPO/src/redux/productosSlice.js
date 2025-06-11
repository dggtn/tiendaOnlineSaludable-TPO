import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const fetchProductos = createAsyncThunk("productos/fetchProductos",async()=>{
    const {data} = await axios.get(`http://localhost:4002/productos`)
    return data
    
} )