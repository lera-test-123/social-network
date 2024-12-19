import { createAsyncThunk } from '@reduxjs/toolkit';
import UserApi from '../../api/userApi';
import {
  follow, setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  toggleIsFollowingProgress,
  unfollow
} from './usersSlice';


const getUsers = createAsyncThunk(
  'users/getUsers',
  async ({ currentPage, pageSize }, {dispatch}) => {
    try {
      dispatch(toggleIsFetching(true));
      const data = await UserApi.getUsers(currentPage, pageSize);
      dispatch(setUsers(data.items));
      dispatch(setCurrentPage(currentPage));
      dispatch(setTotalUsersCount(data.totalCount));
    } finally {
      dispatch(toggleIsFetching(false));
    }
  }
);

const followUser = createAsyncThunk(
  'users/followUser',
  async (userId , {dispatch}) => {
    try {
      dispatch(toggleIsFollowingProgress( { followingInProgress: true, userId }));
      const data = await UserApi.followUser(userId);
      if (data.resultCode === 0) {
       dispatch(follow(userId));
      }
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(toggleIsFollowingProgress( { followingInProgress: false, userId }));
    }
  }
)

const unfollowUser = createAsyncThunk(
  'users/unfollowUser',
  async (userId, { dispatch }) => {
    try {
      dispatch(toggleIsFollowingProgress( { followingInProgress: true, userId }));
      const data = await UserApi.unfollowUser(userId);
      if (data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(toggleIsFollowingProgress( { followingInProgress: false, userId }));
    }
  }
)

export default { getUsers, followUser, unfollowUser }