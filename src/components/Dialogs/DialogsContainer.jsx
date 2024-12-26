import { useDispatch, useSelector } from "react-redux";

import { addMessage } from "../../redux/dialogsSlice";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


const DialogsContainer = (props) => {
  const { dialogs, messages } = useSelector(state => state.dialogs);
  const dispatch = useDispatch();

  const onAddNewMessage = (newMessageText) => {
    dispatch(addMessage(newMessageText));
  }

  return (
    <Dialogs {...{dialogs,
             messages,
             onAddNewMessage,
             }}
    />
  );
}

export default withAuthRedirect(DialogsContainer);
