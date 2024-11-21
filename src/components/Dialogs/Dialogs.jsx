import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, updateNewMessage } from "../../redux/dialogsSlice";


const Dialogs = (props) => {

  // const { dialogs, messages } = props;

  const { dialogs, messages, newMessageText } = useSelector(state => state.dialogs);
  const dispatch = useDispatch();


  const onAddNewMessage = () => {
    dispatch(addMessage());
  }

  const onMessageChange = (e) => {
    const text = e.target.value;
    dispatch(updateNewMessage(text));
  }

  let dialogsElements = dialogs
    .map(d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = messages
    .map((m, index) =>
      <Message className={index % 2 ? s.rightMessage : s.leftMessage} message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea placeholder='Enter your message here'
                    onChange={onMessageChange}
                    value={newMessageText}
          />
          <button onClick={onAddNewMessage}>Send</button>
        </div>
      </div>

    </div>
  );
}

export default Dialogs;
