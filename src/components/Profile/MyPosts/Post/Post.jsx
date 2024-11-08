import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxvD6QMZ-vLAY7lH6dn43kmOZ_Ou2SnUZsw&s"
                 alt=""/>
            {props.massage}
            <div>
                <span>like</span> {props.likesCount}
            </div>

        </div>)
}

export default Post;