import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{
    follow: (state, action) => {
      // const userIndexToUpdate = state.users.findIndex(user => user.id === action.payload.id);
      // if (userIndexToUpdate !== -1) {
      //   state.users[userIndexToUpdate].followed = true;
      // }

      state.users = state.users.map((user) => {
        if (user.id === action.payload) {
          user.followed = true;
          return user;
        }

        return user;
      });
    },
    unfollow: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload) {
          user.followed = false;
          return user;
        }

        return user;
      })
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
    }
  }
})

export const { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress} = usersSlice.actions;

export default usersSlice.reducer;