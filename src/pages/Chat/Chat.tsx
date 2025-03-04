import { useEffect, useState } from "react";

import { ChatMessageType } from "../../api/chatApi";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import chatThunk from "../../redux/chat/thunks";


const ChatPage = ()=> {
    return (
        <div>
            <Chat />
        </div>
    )
}

const Chat = () => {
   const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(chatThunk.startMessagesListening());
        return () => {
            dispatch(chatThunk.stopMessagesListening());
        }
    }, []);

    return (
        <div>
            <Messages />
            <AddMessagesForm />
        </div>
    )
}

const Messages  = () => {
    const messages = useAppSelector(state => state.chat.messages);

    return (
        <div style={{height:'400px', overflowY:'auto'}}>
            {messages.map((m) => <Message message={m} key={m.userId} />)}
        </div>
    )
}

const Message = ({message}: {message: ChatMessageType}) => {

    return (
    <div>
       <img src={message.photo} width={30} /> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
)
}

const AddMessagesForm = () => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')
    const dispatch = useAppDispatch();

    const sendMessage = () => {
        if (!message) {
            return;
        }

       dispatch(chatThunk.sendMessage(message));
       setMessage('');
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={false} onClick={sendMessage} >send</button>
            </div>
        </div>
    )
}

export default ChatPage;