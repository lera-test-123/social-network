import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useSelector} from "react-redux";

const Profile = (props) => {
  const state = useSelector((state) => state);
  const posts = useSelector(state => state.profile.posts);
  const newPostText = useSelector(state => state.profile.newPostText);
  // const { posts, newPostText } = useSelector(state => state.profile);

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}
               newPostText={newPostText}
      />
    </div>)
}

export default Profile;