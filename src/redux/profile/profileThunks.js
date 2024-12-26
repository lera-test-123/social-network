import { createAsyncThunk } from "@reduxjs/toolkit";

import ProfileApi from '../../api/profileApi';
import { setStatus, setUserProfile } from "./profileSlice";




const getProfileUser = createAsyncThunk(
  'ptofile/getProfileUser',
  async (userId,{ dispatch}) => {
      const data = await ProfileApi.getProfile(userId);
        dispatch(setUserProfile(data));
  }
)

const getStatus = createAsyncThunk(
  'ptofile/getStatus',
  async (userId, { dispatch }) => {
    const data = await ProfileApi.getStatus(userId);
    dispatch(setStatus(data.data));
  }
)

const updateStatus = createAsyncThunk(
  'ptofile/updateStatus',
  async (status, { dispatch }) => {
    const data = await ProfileApi.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  }
)

export default { getProfileUser, getStatus, updateStatus }