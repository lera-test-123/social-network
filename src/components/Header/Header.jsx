import styles from './Header.module.css';
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return <header className={styles.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJPJAmkd2OhV1zOoUt6_qW1Mh1uc4qaoWkQ&s'
             className="App-logo" alt="logo"/>

        <div className={styles.loginBlock}>
            { props.isAuth ? props.login
              : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;