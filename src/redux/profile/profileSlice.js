import { createSlice } from "@reduxjs/toolkit";


export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    posts: [
    {id: 1, message: "Hi, how are you", likesCount: 10},
    {id: 2, message: "It's my first post", likesCount: 5},
  ],
    profile: null,
    status: '',
  },
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, { id: state.posts.length + 1, message: action.payload, likesCount: 5 }];
    },
    setUserProfile: (state, action) => {
      state.profile = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    }
  },
})

export const { addPost, setUserProfile, setStatus } = profileSlice.actions;

export default profileSlice.reducer;