import { NavLink } from "react-router-dom";

import { useAppSelector } from "../../lib/hooks";
import styles from './Navbar.module.scss'
import {Container} from "@mui/material";

const navLinks = [
  {link: "/profile", text:"Profile"},
  {link: "/dialogs", text:"Dialogs"},
  {link: "/news", text:"News"},
  {link: "/music", text:"Music"},
  {link: "/settings", text:"Settings"},
  {link: "/users", text:"Users"},
    {link: "/chat", text:"Chat"},
];


const Navbar = () => {

  const sidebar = useAppSelector(state => state.sidebar);

  const friendsElements = sidebar
    .map((f) => {
      return (
          <div className={styles.friendItem} key={f.id}>
            <div className={styles.avatar} >
              <img src="https://i.pinimg.com/736x/91/2c/e1/912ce19bfeadb1e9e2b7cee8f0a4f1bc.jpg"
                   alt={`${f.name} avatar`} />
            </div>
            <span>
              {f.name}
            </span>
          </div>
      )
     });

  const navElements = navLinks
    .map((e, index) => <div className={styles.item} key={index}><NavLink to={e.link}>{e.text}</NavLink></div>);

  return (
    <nav className={styles.nav}>
        {navElements}
        <div className={styles.item}>
          <NavLink to='/friends'>Friends</NavLink>
          <div className={styles.friendsBlock}> {friendsElements}</div>
        </div>
      </nav>)
}

export default Navbar;