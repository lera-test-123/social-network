import { createSlice } from "@reduxjs/toolkit";

import { DialogsTypes, MessagesType } from './types'


// type InitialDialogsType = {
//   dialogs: { id: number, name: string }[]
//   messages: { id: number, message: string }[]
// }


type InitialDialogsType = {
  dialogs: DialogsTypes[]
  messages: MessagesType[]
}

const initialState: InitialDialogsType = {
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
}


export const slice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    addMessage: (state, action: {payload: string, type: string}) => {
      state.messages =  [...state.messages, { id: state.messages.length + 1, message: action.payload }];
    },
  },
})

export const { addMessage } = slice.actions;

export default slice.reducer;