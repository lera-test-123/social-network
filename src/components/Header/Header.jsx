import s from './Header.module.css';


const Header = () => {
    return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJPJAmkd2OhV1zOoUt6_qW1Mh1uc4qaoWkQ&s'
             className="App-logo" alt="logo"/>
    </header>
}

export default Header;