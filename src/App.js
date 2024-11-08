import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./components/Profile/MyPosts/Post/Post";

const dialogs = [
  {id: 1, name: "Mark"},
  {id: 2, name: "Anna"},
  {id: 3, name: "Larysa"},
  {id: 4, name: "Saha"},
  {id: 5, name: "Anastasia"},
  {id: 6, name: "Polina"}
]

const messages = [
  {id: 1, massage: "Hi"},
  {id: 2, massage: "How are you?"},
  {id: 3, massage: "What are you doing?"},
  {id: 4, massage: "Hi"},
  {id: 5, massage: "Hi"},
  {id: 6, massage: "Hi"}
]

const App = () => {

  return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/dialogs/*' element={<Dialogs {...{ dialogs, messages }} />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
};


export default App;
