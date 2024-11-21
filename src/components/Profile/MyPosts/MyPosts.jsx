import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import { useDispatch } from "react-redux";
import { addPost, updateNewPost } from "../../../redux/profileSlice";




const MyPosts = (props) => {

  const dispatch = useDispatch();

  let postsElements = props.posts
    .map(m => <Post message={m.message} likesCount={m.likesCount}/>)

  const onAddPost = () => {
    // props.dispatch(addPostActionCreator());
    dispatch(addPost());
  }

  const onPostChange = (e) => {
    const text = e.target.value;
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
    dispatch(updateNewPost(text));
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
                    value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
