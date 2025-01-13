import styles from './Users.module.scss';
import Pagination from '../Pagination/Pagination';
import Preloader from '../common/Preloader/Preloader';
import User from "./User";


const Users = (props) => {

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
        props.users.map( (user) => <User key={user.id} followingInProgress={props.followingInProgress}
                                         unfollowUser={props.unfollowUser}
                                         followUser={props.followUser}
                                         user={user} />)
      }
    </div>
  )
}


export default Users;