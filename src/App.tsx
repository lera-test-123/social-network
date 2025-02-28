import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import UsersPage from "./components/Users/UsersPage";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";


const App = (props: any) => {
  const { isFetching } = useSelector((state: any) => state.auth);

  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        {isFetching ? (<Preloader />) : (
          <Routes>
            <Route path='/' element={<Profile/>}/>
            <Route path='/profile/:userId?' element={<Profile/>}/>
            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/users' element={<UsersPage/>}/>
            <Route path='/friends' element={<Friends/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        )}
      </div>
    </div>
  )
};


export default App;
