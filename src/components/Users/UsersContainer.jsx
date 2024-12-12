import { useEffect } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersSlice';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


let UsersContainer = (props) => {

  const { users, pageSize, totalUsersCount, currentPage, isFetching } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    toggleIsPreloader(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
      {
        withCredentials: true
      })
      .then((res) => {
        getSetUsers(res.data.items);
        getTotalUsersCount(res.data.totalCount);
        toggleIsPreloader(false);
      })
  },[])

  const onPageChange = (pageNumber) => {
    toggleIsPreloader(true);
    getCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
      {
        withCredentials: true
      })
      .then((res) => {
        toggleIsPreloader(false);
        getSetUsers(res.data.items);
        getTotalUsersCount(res.data.totalCount);
      })
  }

  const followUser = (userId) => {
    dispatch(follow(userId));
  }

  const unfollowUser = (userId) => {
    dispatch(unfollow(userId));
  }

  const getTotalUsersCount = (users) => {
    dispatch(setTotalUsersCount(users));
  }

  const toggleIsPreloader = (isFetching) => {
    dispatch(toggleIsFetching(isFetching));
  }

  const getSetUsers = (users) => {
    dispatch(setUsers(users));
  }

  const getCurrentPage = (page) => {
    dispatch(setCurrentPage(page));
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
        isFetching
      }}
      />
    </>
  );
}

export default UsersContainer;