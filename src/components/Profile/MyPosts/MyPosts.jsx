import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
  let postsElements = props.posts
    .map(m => <Post message={m.message} likesCount={m.likesCount}/>)

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = (e) => {
    const text = e.target.value;
    props.updateNewPost(text);
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
