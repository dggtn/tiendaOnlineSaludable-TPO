import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const backendURL = `http://localhost:4002/v1`;
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, contrasena }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendURL}/auth/autenticarse`,
        { email, contrasena },
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
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default autenticacionSlice.reducer;
