import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const tmpPosts = [
  {id: 1, massage: "Hi, how are you", likesCount: 10},
  {id: 2, massage: "It's my first post", likesCount: 5},
];

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={tmpPosts} />
    </div>)
}

export default Profile;