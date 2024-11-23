import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  const onAddNewMessage = () => {
    props.onAddNewMessage();
  }

  const onMessageChange = (e) => {
    const text = e.target.value;
    props.onMessageChange(text);
  }

  let dialogsElements = props.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = props.messages
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
                    value={props.newMessageText}
          />
          <button onClick={onAddNewMessage}>Send</button>
        </div>
      </div>

    </div>
  );
}

export default Dialogs;
