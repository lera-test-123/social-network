import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";


const App = (props) => {
  const { isFetching } = useSelector((state) => state.auth);

  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <Navbar/>
      <div className='app-wrapper-content'>
        {isFetching ? (<Preloader />) : (
          <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/users' element={<UsersContainer/>}/>
            <Route path='/friends' element={<Friends/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        )}
      </div>
    </div>
  )
};


export default App;
