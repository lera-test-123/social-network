import s from "../Dialogs.module.css";

const Message = (props) => {
    return <div className={s.dialogs}>{props.massage}</div>
}

export default Message;