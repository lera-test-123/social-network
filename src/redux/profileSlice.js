import { createSlice } from "@reduxjs/toolkit";


export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    posts: [
    {id: 1, message: "Hi, how are you", likesCount: 10},
    {id: 2, message: "It's my first post", likesCount: 5},
  ],
    newPostText: '',
  },
  reducers: {
    addPost: (state) => {
      const newPost = {id: 3, message: state.newPostText, likesCount: 0};
      state.posts.push(newPost);
      state.newPostText = '';
    },
      updateNewPost: (state, action) => {
      state.newPostText = action.payload;
    },
  },
})

export const { addPost, updateNewPost } = profileSlice.actions;

export default profileSlice.reducer;