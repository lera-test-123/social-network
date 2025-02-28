import { addPost } from "../../../redux/profile/slice";
import MyPosts from "./MyPosts";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";


const MyPostsContainer = () => {
  const { posts } = useAppSelector(state => state.profile);
  const dispatch = useAppDispatch();

  const onAddPost = (newPostText: string) => {
    dispatch(addPost(newPostText));
  }

  return (
    <MyPosts addPost={onAddPost}
             posts={posts}
    />
  );
}

export default MyPostsContainer;
