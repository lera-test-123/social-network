import { createSlice } from "@reduxjs/toolkit";
import authThunks from "./authThunks";

const initialState = {
  userId: null,
  email: null,
  login: null,
  password: null,
  isAuth: false,
  isFetching: true,
  isRememberMe: false,
  errorMessages: [],
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsFetching(state, action){
      state.isFetching = action.payload;
    },
    setAuthUserData: (state, action) => {
        return { ...state, ...action.payload };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authThunks.login.fulfilled, (state, action) => {
      state.errorMessages = [];
    })
    builder.addCase(authThunks.login.rejected, (state, action) => {
      state.errorMessages = action.payload.messages;
    })
  },
})

export const { setAuthUserData, setIsFetching, } = authSlice.actions;

export default authSlice.reducer;