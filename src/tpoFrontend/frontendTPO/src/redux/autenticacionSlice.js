import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const backendURL = `http://localhost:4002/v1`;
/**
 * @typedef {Object} LoginArgs
 * @property {string} email
 * @property {string} contrasena
 */
export const userLogin = createAsyncThunk(
  "auth/login",
  /**
   * @param {LoginArgs} payload
   * @param {Object} thunkAPI
   */
  async (payload, { rejectWithValue }) => {
    if (!payload || !payload.email || !payload.contrasena) {
      return rejectWithValue("Faltan datos para login");
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendURL}/auth/autenticarse`,
        { email: payload.email, contrasena: payload.contrasena },
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
/**
 * @typedef {Object} RegisterArgs
 * @property {string} email
 * @property {string} contrasena
 * @property {string} nombre
 * @property {string} apellido
 */
export const registrarUsuario = createAsyncThunk(
  "register/singIn",
  /**
   * @param {RegisterArgs} payload
   * @param {Object} thunkAPI
   */
  async (payload, { rejectWithValue }) => {
    if (!payload || !payload.email || !payload.contrasena || !payload.nombre || !payload.apellido) {
      return rejectWithValue("Faltan datos para registro");
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendURL}/auth/registrarse`,
        {  email: payload.email, contrasena: payload.contrasena, nombre: payload.nombre, apellido: payload.apellido },
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
const initialState = {
  loading: false,
  userInfo: null,
  accessToken: null,
  error: null,
  success: false,
};

const autenticacionSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.accessToken = payload.access_token;
        const datos = jwtDecode(payload.access_token);
        state.userInfo = {
          rol: datos["rol"],
          email: datos.sub,
          accessToken: payload.access_token,
        };
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(registrarUsuario.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registrarUsuario.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.accessToken = payload.access_token;
        const datos = jwtDecode(payload.access_token);
        state.userInfo = {
          rol: datos["rol"],
          email: datos.sub,
          accessToken: payload.access_token,
        };
        state.error = null;
      })
      .addCase(registrarUsuario.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export default autenticacionSlice.reducer;
