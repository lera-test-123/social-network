import { createSlice } from "@reduxjs/toolkit";

export const dialogsSlice = createSlice({
  name: "dialogs",
  initialState: {
    dialogs: [
      {id: 1, name: "Mark"},
      {id: 2, name: "Anna"},
      {id: 3, name: "Larysa"},
      {id: 4, name: "LyaLya"},
      {id: 5, name: "Anastasia"},
      {id: 6, name: "Polina"}
    ],
    messages: [
      {id: 1, message: "Hi"},
      {id: 2, message: "How are you?"},
      {id: 3, message: "What are you doing?"},
      {id: 4, message: "Hi"},
      {id: 5, message: "Hi"},
      {id: 6, message: "Hi"}
    ],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages =  [...state.messages, { id: state.messages.length + 1, message: action.payload }];
    },
  },
})

export const { addMessage } = dialogsSlice.actions;

export default dialogsSlice.reducer;