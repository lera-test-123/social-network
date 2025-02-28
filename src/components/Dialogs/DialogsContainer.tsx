import { addMessage } from "../../redux/dialogs/slice";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";


const DialogsContainer = () => {
  const { dialogs, messages } = useAppSelector(state => state.dialogs);
  const dispatch = useAppDispatch();

  const onAddNewMessage = (newMessageText: string) => {
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
