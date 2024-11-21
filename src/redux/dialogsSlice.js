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
    newMessageText: '',
  },
  reducers: {
    addMessage: (state) => {
      const newMessage = {id: 7, message: state.newMessageText};
      state.messages.push(newMessage);
      state.newMessageText = '';
    },
    updateNewMessage: (state, action) => {
      state.newMessageText = action.payload;
    },
  },
})

export const { addMessage, updateNewMessage } = dialogsSlice.actions;

export default dialogsSlice.reducer;