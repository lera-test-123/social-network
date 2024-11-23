// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { useDispatch, useSelector } from "react-redux";
import { addPost, updateNewPost } from "../../../redux/profileSlice";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  const { posts, newPostText } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const onAddPost = () => {
    // props.dispatch(addPostActionCreator());
    dispatch(addPost());
  }

  const onPostChange = (text) => {
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
    dispatch(updateNewPost(text));
  }

  return (
    <MyPosts updateNewPost={onPostChange}
             addPost={onAddPost}
             posts={posts}
             newPostText={newPostText}
    />
  );
}

export default MyPostsContainer;
