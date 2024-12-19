import { useDispatch, useSelector } from "react-redux";

import { addMessage, updateNewMessage } from "../../redux/dialogsSlice";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


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
    <Dialogs {...{dialogs,
             messages,
             newMessageText,
             onMessageChange,
             onAddNewMessage,
             }}
    />
  );
}

export default withAuthRedirect(DialogsContainer);
