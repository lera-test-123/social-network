import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ dialogs, messages }) => {

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} /> );
    let massagesElements = messages
        .map(m => <Message message={m.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.massages}>
                { massagesElements }
            </div>
        </div>
    )
}

export default Dialogs;