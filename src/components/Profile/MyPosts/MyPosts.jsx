import { Field, Form, Formik } from "formik";

import styles from './MyPosts.module.scss';
import Post from "./Post/Post";


const MyPosts = (props) => {

  let postsElements = props.posts
    .map(m => <Post message={m.message} likesCount={m.likesCount} key={m.id}/>)

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <AddPostForm addPost={props.addPost}/>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
}

const AddPostForm = (props) => {
  const onSubmit = (data, { resetForm }) => {
    props.addPost(data.newPostText);
    resetForm();
  }

  return <div>
    <Formik
      initialValues={{
        newPostText: ''
      }}
      onSubmit={onSubmit}
      >
      <Form>
        <Field as='textarea' name='newPostText'/>
        <button type='submit'>Add post</button>
      </Form>
    </Formik>
  </div>
}

export default MyPosts;
