import { NavLink } from "react-router-dom";
import axios from "axios";

import styles from './Users.module.css';
import userPhoto from "../../assets/images/userPhoto.jpg";
import Pagination from "../Pagination/Pagination";
import Preloader from "../common/Preloader/Preloader";


let Users = (props) => {
  return (
  <div>
      <div>
        {
          <Pagination totalUsersCount={props.totalUsersCount}
                      pageSize={props.pageSize}
                      currentPage={props.currentPage}
                      onPageChange={props.onPageChange}
          />
        }
      </div>
    { props.isFetching ? <Preloader /> : null }
      {
        props.users.map( (user) => <div key={user.id}>
        <span>
          <div>
            <NavLink to={`/profile/${user.id}`}>
              <img src={ user.photos.small != null ? user.photos.small : userPhoto } alt="avatar" className={styles.userPhoto}/>
            </NavLink>
          </div>
          <div>
            {
              user.followed
                ? <button onClick={ () => {

                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                    withCredentials: true,
                    headers: {
                      'API=KEY': 'f2c45c51-10dc-48f1-aef7-f93775c76652'
                    }
                  })
                    .then((res) => {
                      if (!res.data.resultCode === 0) {
                        props.unfollowUser(user.id);
                      }
                    })


                }}>Unfollow</button>
                : <button onClick={ () => {

                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{}, {
                    withCredentials: true,
                    headers: {
                      'API=KEY': 'f2c45c51-10dc-48f1-aef7-f93775c76652'
                    }
                  })
                    .then((res) => {
                      if (res.data.resultCode === 0) {
                        props.followUser(user.id);
                      }
                    })

                }}>Follow</button>
            }
          </div>
        </span>
          <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </span>
        </div>)
      }
    </div>
  )
}


export default Users;