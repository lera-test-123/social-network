import { RootState } from "../redux-store";

export const selectUsers = (state: RootState) => state.users.users;

export const selectPageSize = (state: RootState) => state.users.pageSize;

export const selectTotalUsersCount = (state: RootState) => state.users.totalUsersCount;

export const selectCurrentPage = (state: RootState) => state.users.currentPage;

export const selectIsFetching = (state: RootState) => state.users.isFetching;

export const selectFollowingInProgress = (state: RootState) => state.users.followingInProgress;

