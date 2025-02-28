import s from "../Dialogs.module.scss";

type PropsType = {
    className: string;
    message: string
    key: number
}

const Message = (props: PropsType) => {
    return <div className={props.className}>{props.message}</div>
}

export default Message;