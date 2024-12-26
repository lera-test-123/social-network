import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../redux/profile/profileSlice";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  const { posts } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const onAddPost = (newPostText) => {
    dispatch(addPost(newPostText));
  }

  return (
    <MyPosts addPost={onAddPost}
             posts={posts}
    />
  );
}

export default MyPostsContainer;
