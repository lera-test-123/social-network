import { createAsyncThunk } from "@reduxjs/toolkit";

import chatApi from "../../api/chatApi";
import { setMessages } from "./slice"


const startMessagesListening = createAsyncThunk(
    "chat/startMessagesListening",
    async (_, { dispatch }) => {
        chatApi.start();
        chatApi.subscribe( (messages) => {
            dispatch(setMessages(messages))
        })
    }
)

const stopMessagesListening = createAsyncThunk(
    "chat/stopMessagesListening",
    async (_, { dispatch }) => {
        chatApi.unSubscribe( (messages) => {
            dispatch(setMessages(messages))
        })
        chatApi.stop();
    }
)

const sendMessage = createAsyncThunk<void, string >(
    "chat/sendMessage",
    async (message) => {
        chatApi.sendMessage(message)
    }
)


export default { startMessagesListening, stopMessagesListening, sendMessage };