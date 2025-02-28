import { createSlice } from "@reduxjs/toolkit";
import authThunks from "./thunks";

export type AuthStateType = {
  userId: null | number
  email: null | string
  login: null | string
  password: null | string
  isAuth: boolean
  isFetching: boolean
  isRememberMe: boolean
  errorMessages: string[] | any[]
  captchaUrl: null | string
}

const initialState: AuthStateType = {
  userId: null,
  email: null,
  login: null,
  password: null,
  isAuth: false,
  isFetching: true,
  isRememberMe: false,
  errorMessages: [],
  captchaUrl: null,
}

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsFetching(state, action){
      state.isFetching = action.payload;
    },
    setAuthUserData: (state, action) => {
        return { ...state, ...action.payload };
    },
    getCaptchaUrlSuccess: (state, action) => {
      state.captchaUrl = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authThunks.login.fulfilled, (state, action) => {
      state.errorMessages = [];
    })
    builder.addCase(authThunks.login.rejected, (state, action: any) => {
      state.errorMessages = action.payload.messages;
    })
  },
})

export const { setAuthUserData, setIsFetching, getCaptchaUrlSuccess, } = slice.actions;

export default slice.reducer;