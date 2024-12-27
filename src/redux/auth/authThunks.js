import { createAsyncThunk } from "@reduxjs/toolkit";

import authApi from "../../api/authApi";
import { setAuthUserData } from "./authSlice";


const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { dispatch }) => {
    const data = await authApi.getMyAuthData();
    if (data.resultCode === 0) {
      let { id: userId, email, login } = data.data;
      dispatch(setAuthUserData({ userId, email, login, isAuth: true }));
    }
  });

const login = createAsyncThunk (
  'auth/login',
  async ({email, password, rememberMe}, { dispatch }) => {
    const data = await authApi.login(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(getCurrentUser());
    }
  }
)

const logout = createAsyncThunk (
  'auth/logout',
  async (_, { dispatch }) => {
    const data = await authApi.logout();
    if (data.resultCode === 0) {
      dispatch(setAuthUserData({ id: null, email: null, login: null, isAuth: false }));
    }
  }
)

export default { getCurrentUser, login, logout };
