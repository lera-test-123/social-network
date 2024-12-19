import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProfile } from "../../api/profileApi";
import { setUserProfile } from "./profileSlice";

 export const getProfileUser = createAsyncThunk(
  'ptofile/getProfileUser',
  async (userId,{ dispatch}) => {
      const data = await getProfile(userId);
        dispatch(setUserProfile(data));
  }
)