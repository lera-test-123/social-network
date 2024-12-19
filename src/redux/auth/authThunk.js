import { createAsyncThunk } from "@reduxjs/toolkit";

import { getMyAuthData } from "../../api/authApi";
import { setAuthUserData } from "./authSlice";

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { dispatch }) => {
    const data = await getMyAuthData();
    if (data.resultCode === 0) {
      let { id: userId, email, login } = data.data;
      dispatch(setAuthUserData({ userId, email, login }));
    }
  });
