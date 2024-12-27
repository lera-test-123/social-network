import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const navLinks = [
  {link: "/profile", text:"Profile"},
  {link: "/dialogs", text:"Dialogs"},
  {link: "/news", text:"News"},
  {link: "/music", text:"Music"},
  {link: "/settings", text:"Settings"},
  {link: "/users", text:"Users"},
];


const Navbar = (props) => {

  const sidebar = useSelector(state => state.sidebar);

  const friendsElements = sidebar
    .map((f) => {
      return (
          <div className={s.friendItem} key={f.id}>
            <div className={s.avatar} >
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
    .map((e, index) => <div className={s.item} key={index}><NavLink to={e.link}>{e.text}</NavLink></div>);

  return (
    <nav className={s.nav}>
        {navElements}
        <div className={s.item}>
          <NavLink to='/friends'>Friends</NavLink>
          <div className={s.friendsBlock}> {friendsElements}</div>
        </div>
      </nav>)
}

export default Navbar;