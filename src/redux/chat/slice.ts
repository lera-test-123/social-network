import { createSlice } from "@reduxjs/toolkit";

import { ChatMessageType } from "../../api/chatApi";


type ChatStateType = {
    messages: ChatMessageType[];
}

const initialState: ChatStateType = {
    messages: [],
}

export const slice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setMessages(state, action) {
            state.messages = [...state.messages, ...action.payload];
        }
    }
})

export const { setMessages } = slice.actions;

export default slice.reducer;