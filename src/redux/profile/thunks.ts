import { createAsyncThunk } from "@reduxjs/toolkit";

import ProfileApi from '../../api/profileApi';
import {setStatus, setUserProfile, updatePhoto, updateProfile} from "./slice";
import { ProfileFormType } from "./type";
import { ResultCodeEnum } from "../../api/types";


const getProfileUser = createAsyncThunk<void, number>(
  'ptofile/getProfileUser',
  async (userId,{ dispatch}) => {
      const data = await ProfileApi.getProfile(userId);
        dispatch(setUserProfile(data));
  }
)

const getStatus = createAsyncThunk<void, number>(
  'ptofile/getStatus',
  async (userId, { dispatch }) => {
    const data = await ProfileApi.getStatus(userId);
    dispatch(setStatus(data));
  }
)

const updateStatus = createAsyncThunk<void, string>(
  'ptofile/updateStatus',
  async (status, { dispatch }) => {
    const data = await ProfileApi.updateStatus(status);
    if (data.data.resultCode === ResultCodeEnum.Success) {
      dispatch(setStatus(status));
    }
  }
)

const savePhoto = createAsyncThunk<void, string>(
  'ptofile/savePhoto',
  async (file, { dispatch }) => {
    const data = await ProfileApi.savePhoto(file);
    if (data.data.resultCode === ResultCodeEnum.Success) {
      dispatch(updatePhoto(data.data.data.photos));
    }
  }
)

const saveProfileInfo = createAsyncThunk<void, ProfileFormType>(
  'ptofile/saveProfileInfo',
  async (profile, { dispatch, rejectWithValue }) => {
    const data = await ProfileApi.updateProfileInfo(profile);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(updateProfile(profile));
    } else if (data.messages?.length) {
      return rejectWithValue({ messages: data.messages });
    } else {
      return rejectWithValue({ messages: 'error' });
    }
  }
)

export default { getProfileUser, getStatus, updateStatus, savePhoto, saveProfileInfo }