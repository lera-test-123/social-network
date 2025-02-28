import styles from '../Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

type PropsType = {
    name: string
    id: number
    key: number
}

const DialogItem = (props: PropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <img src="https://i.pinimg.com/736x/91/2c/e1/912ce19bfeadb1e9e2b7cee8f0a4f1bc.jpg" alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
}

export default DialogItem;