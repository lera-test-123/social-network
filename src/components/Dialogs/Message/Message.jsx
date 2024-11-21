import s from "../Dialogs.module.css";

const Message = (props) => {
    return <div className={props.className}>{props.message}</div>
}

export default Message;