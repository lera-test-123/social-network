import { NavLink } from 'react-router-dom';

import styles from './Users.module.scss';
import userPhoto from '../../assets/images/userPhoto.jpg';


const User = (props) => {

  return (
    <div>
        <span>
          <div>
            <NavLink to={`/profile/${props.user.id}`}>
              <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt="avatar"
                   className={styles.userPhoto}/>
            </NavLink>
          </div>
          <div>
            {
              <button
                disabled={props.followingInProgress.some((id) => id === props.user.id)}
                onClick={() => {
                  props.user.followed ? props.unfollowUser(props.user.id) : props.followUser(props.user.id)
                }}>
                {props.user.followed ? 'Unfollow' : 'Follow'}
              </button>
            }
          </div>
        </span>
      <span>
            <span>
              <div>{props.user.name}</div>
              <div>{props.user.status}</div>
            </span>
            <span>
              <div>{'props.user.location.country'}</div>
              <div>{'props.user.location.city'}</div>
            </span>
          </span>
    </div>
  )
}

export default User;