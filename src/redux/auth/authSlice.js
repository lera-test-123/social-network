import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  email: null,
  login: null,
  password: null,
  isAuth: false,
  isFetching: true,
  isRememberMe: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    setAuthUserData: (state, action) => {
        return { ...state, ...action.payload, isFetching: false };
    }
  }
})

export const { setAuthUserData, } = authSlice.actions;

export default authSlice.reducer;