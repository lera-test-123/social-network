import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import {
  followUnfollow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  toggleIsFollowingProgress,
} from './usersSlice';


const getUsers = createAsyncThunk(
  'users/getUsers',
  async ({ currentPage, pageSize }, {dispatch}) => {
    try {
      dispatch(toggleIsFetching(true));
      const data = await userApi.getUsers(currentPage, pageSize);
      dispatch(setUsers(data.items));
      dispatch(setCurrentPage(currentPage));
      dispatch(setTotalUsersCount(data.totalCount));
    } finally {
      dispatch(toggleIsFetching(false));
    }
  }
);


const followUnfollowUser = createAsyncThunk(
  'users/followUnfollowUser',
  async ({userId, followType} , {dispatch}) => {
    try {
      dispatch(toggleIsFollowingProgress( { followingInProgress: true, userId }));
      const data = await userApi[followType ? 'followUser' : 'unfollowUser'](userId);
      if (data.resultCode === 0) {
       dispatch(followUnfollow({ userId, followType }));
      }
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(toggleIsFollowingProgress( { followingInProgress: false, userId }));
    }
  }
);


export default { getUsers, followUnfollowUser }