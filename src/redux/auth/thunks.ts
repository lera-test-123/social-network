import { createAsyncThunk } from "@reduxjs/toolkit";

import authApi from "../../api/authApi";
import { getCaptchaUrlSuccess, setAuthUserData, setIsFetching } from "./slice";
import getCaptchaUrlApi from "../../api/securityApi";
import {ResultCodeEnum, ResultCodeForCaptcha} from "../../api/types";


const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsFetching(true));
      const data = await authApi.getMyAuthData();
      if (data.resultCode === ResultCodeEnum.Success) {
        let { id: userId, email, login } = data.data;
        dispatch(setAuthUserData({ userId, email, login, isAuth: true }));
      }
    } finally {
      dispatch(setIsFetching(false));
    }
  });

const login = createAsyncThunk<
    void,
    { email: string, password: string, rememberMe: boolean, captcha?: string | null}
> (
  'auth/login',
  async ({email, password, rememberMe, captcha}, { dispatch, rejectWithValue }) => {
    try {
      const data = await authApi.login(email, password, rememberMe, captcha);
      if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(getCurrentUser());
      } else if (data.messages?.length) {
        if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
          dispatch(getCaptchaUrl());
        }
        return rejectWithValue({ messages: data.messages });
      } else {
        return rejectWithValue({ messages: 'Invalid login or password' });
      }
    } catch {
      return rejectWithValue({ messages: 'Error during auth.' });
    }
  });


const logout = createAsyncThunk (
  'auth/logout',
  async (_, { dispatch }) => {
    const data = await authApi.logout();
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(setAuthUserData({ id: null, email: null, login: null, isAuth: false }));
    }
  }
)

const getCaptchaUrl = createAsyncThunk(
  'auth/getCaptchaUrl',
  async (_, { dispatch }) => {
    const data = await getCaptchaUrlApi()
    const captchaUrl = data.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
  }
)

export default { getCurrentUser, login, logout, getCaptchaUrl };
