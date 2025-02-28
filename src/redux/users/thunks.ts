import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import {
    followUnfollow,
    setCurrentPage,
    setFilteredUsers,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress,
} from './slice';
import { ResultCodeEnum } from "../../api/types";
import {FilterType} from "./type";


const getUsers = createAsyncThunk<void, { currentPage: number, pageSize: number, filter: FilterType }>(
  'users/getUsers',
  async ({ currentPage, pageSize, filter }, {dispatch}) => {
    try {
      dispatch(toggleIsFetching(true));
      const data = await userApi.getUsers(currentPage, pageSize, filter.term, filter.friend);
      dispatch(setUsers(data.items));
      dispatch(setCurrentPage(currentPage));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setFilteredUsers(filter))
    } finally {
      dispatch(toggleIsFetching(false));
    }
  }
);


const followUnfollowUser = createAsyncThunk<void, { userId: number, followType: boolean }>(
  'users/followUnfollowUser',
  async ({userId, followType} , {dispatch}) => {
    try {
      dispatch(toggleIsFollowingProgress( { followingInProgress: true, userId }));
      const data = await userApi[followType ? 'followUser' : 'unfollowUser'](userId);
      if (data.resultCode === ResultCodeEnum.Success) {
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