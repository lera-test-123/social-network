import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleIsFollowingProgress } from '../../redux/users/usersSlice';
import Users from './Users';
import usersThunk from '../../redux/users/usersThunks';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


let UsersContainer = (props) => {
  const { users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersThunk.getUsers({ currentPage, pageSize }));
  },[])

  const onPageChange = (pageNumber) => {
    dispatch(usersThunk.getUsers( { currentPage: pageNumber, pageSize }));
  }

  const followUser = (userId) => {
    dispatch(usersThunk.followUnfollowUser({ userId, followType: true }));
  }

  const unfollowUser = (userId) => {
    dispatch(usersThunk.followUnfollowUser({ userId, followType: false }));
  }

  const toggleFollowingProgress = (followingInProgress) => {
    dispatch(toggleIsFollowingProgress(followingInProgress));
  }



  return (
    <>
      <Users {...{
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        onPageChange,
        followUser,
        unfollowUser,
        isFetching,
        toggleFollowingProgress,
        followingInProgress,
      }}
      />
    </>
  );
}

export default withAuthRedirect(UsersContainer);