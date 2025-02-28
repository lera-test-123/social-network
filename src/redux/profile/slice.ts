import { createSlice } from "@reduxjs/toolkit";

import profileThunks from "./thunks";
import { PostType, ProfileType } from "./type";

type initialProfileType = {
  posts: PostType[]
  profile: ProfileType | null
  status: string
  errorMessages?: string[]
}

const initialState: initialProfileType  = {
  posts: [
    {id: 1, message: "Hi, how are you", likesCount: 10},
    {id: 2, message: "It's my first post", likesCount: 5},
  ],
  profile: null,
  status: '',
}

export const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, { id: state.posts.length + 1, message: action.payload, likesCount: 5 }];
    },
    setUserProfile: (state, action) => {
      state.profile = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    updatePhoto: (state, action) => {
      if (state.profile) {
        state.profile.photos = action.payload;
      }
    },
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload, contacts: { ...state.profile?.contacts, ...action.payload.contacts } };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(profileThunks.saveProfileInfo.fulfilled, (state, action) => {
      state.errorMessages = [];
    })
    builder.addCase(profileThunks.saveProfileInfo.rejected, (state, action: { payload: any, type: string }) => {
      state.errorMessages = action.payload.messages;
    })
  },
})

export const { addPost, setUserProfile, setStatus, updatePhoto, updateProfile } = slice.actions;

export default slice.reducer;