import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img src="https://i.pinimg.com/736x/91/2c/e1/912ce19bfeadb1e9e2b7cee8f0a4f1bc.jpg" alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
}

export default DialogItem;