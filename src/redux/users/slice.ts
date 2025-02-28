import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialUsersType } from "./type";


const initialState: InitialUsersType = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  filter: {
    term: '',
    friend: null
  },
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{
    followUnfollow: (state, action: PayloadAction<{ userId: number; followType: boolean }>) => {
      // const userIndexToUpdate = state.users.findIndex(user => user.id === action.payload.id);
      // if (userIndexToUpdate !== -1) {
      //   state.users[userIndexToUpdate].followed = true;
      // }

      state.users = state.users.map((user) => {
        if (user.id === action.payload.userId) {
          user.followed = action.payload.followType;
          return user;
        }
        return user;
      });
    },
    setUsers: (state, action) => {
       state.users = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalUsersCount: (state, action) => {
      state.totalUsersCount = action.payload;
    },
    toggleIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    toggleIsFollowingProgress: (state, action) => {
      let currentFollowingProgress = [...state.followingInProgress];

      if (action.payload.followingInProgress) { // loading started
        currentFollowingProgress.push(action.payload.userId);
      } else { // loading finished
        currentFollowingProgress = currentFollowingProgress.filter((userIdFromList) => userIdFromList !== action.payload.userId);
      }

      state.followingInProgress = currentFollowingProgress;
    },
    setFilteredUsers: (state, action) => {
      state.filter = action.payload;
    }
  }
})

export const { followUnfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress, setFilteredUsers } = usersSlice.actions;

export default usersSlice.reducer;