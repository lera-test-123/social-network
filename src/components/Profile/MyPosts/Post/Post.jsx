import styles from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={styles.item}>
          <div className={styles.postBlock}>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxvD6QMZ-vLAY7lH6dn43kmOZ_Ou2SnUZsw&s"
                   alt=""/>
            </div>
            <div>
              {props.message}
            </div>
          </div>
          <div>
            <span>like</span> {props.likesCount}
          </div>

        </div>)
}

export default Post;