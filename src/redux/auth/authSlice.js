import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: true,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    setAuthUserData: (state, action) => {
        return { ...state, ...action.payload, isAuth: true, isFetching: false };
    }
  }
})

export const { setAuthUserData, } = authSlice.actions;

export default authSlice.reducer;