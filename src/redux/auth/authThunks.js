import { createAsyncThunk } from "@reduxjs/toolkit";

import authApi from "../../api/authApi";
import { setAuthUserData, setIsFetching } from "./authSlice";


const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsFetching(true));
      const data = await authApi.getMyAuthData();
      if (data.resultCode === 0) {
        let { id: userId, email, login } = data.data;
        dispatch(setAuthUserData({ userId, email, login, isAuth: true }));
      }
    } finally {
      dispatch(setIsFetching(false));
    }
  });

const login = createAsyncThunk (
  'auth/login',
  async ({email, password, rememberMe}, { dispatch, rejectWithValue }) => {
    try {
      const data = await authApi.login(email, password, rememberMe);
      if (data.resultCode === 0) {
        dispatch(getCurrentUser());
      } else if (data.messages?.length) {
        return rejectWithValue({ messages: data.messages });
      } else {
        return rejectWithValue({ messages: 'Invalid login or password' });
      }
    } catch {
      return rejectWithValue({ messages: ['Error during auth.'] });
    }
  });


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
