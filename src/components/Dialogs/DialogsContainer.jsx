import { useDispatch, useSelector } from "react-redux";
import { addMessage, updateNewMessage } from "../../redux/dialogsSlice";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

  const { dialogs, messages, newMessageText } = useSelector(state => state.dialogs);
  const dispatch = useDispatch();

  const onAddNewMessage = () => {
    dispatch(addMessage());
  }

  const onMessageChange = (text) => {
    dispatch(updateNewMessage(text));
  }

  return (
    <Dialogs dialogs={dialogs}
             messages={messages}
             newMessageText={newMessageText}
             onMessageChange={onMessageChange}
             onAddNewMessage={onAddNewMessage}/>
  );
}

export default DialogsContainer;
