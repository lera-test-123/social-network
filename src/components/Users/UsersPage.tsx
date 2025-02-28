import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import styles from './Users.module.scss';
import Pagination from '../Pagination/Pagination';
import Preloader from '../common/Preloader/Preloader';
import User from "./User";
import UsersSearchForm, { UsersSearchFormType } from "./UsersSearchForm";
import usersThunk from "../../redux/users/thunks";
import {toggleIsFollowingProgress} from "../../redux/users/slice";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";



const UsersPage = () => {
    let { users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress, filter} = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const queryObject = Object.fromEntries(searchParams.entries());

    useEffect(() => {
       if (queryObject.page) {
           currentPage = Number(queryObject.page)
       }
       if (queryObject.term) {
           filter = {...filter, term: queryObject.term}
       }

       dispatch(usersThunk.getUsers({
           currentPage,
           pageSize,
           filter: { ...filter, friend: queryObject.friend === 'null' ? null : Boolean(queryObject.friend) }
       }));
    },[])

    useEffect(() => {
        navigate(`?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`, { replace: true });
    }, [filter, currentPage]);

    const onPageChange = (pageNumber: number) => {
        dispatch(usersThunk.getUsers( { currentPage: pageNumber, pageSize, filter }));
    }

    const followUser = (userId: number) => {
        dispatch(usersThunk.followUnfollowUser({ userId, followType: true }));
    }

    const unfollowUser = (userId: number) => {
        dispatch(usersThunk.followUnfollowUser({ userId, followType: false }));
    }

    // const toggleFollowingProgress = (followingInProgress: number[]) => {
    //     dispatch(toggleIsFollowingProgress(followingInProgress));
    // }

    const onSubmit = (values: UsersSearchFormType) => {
        dispatch(usersThunk.getUsers({ currentPage: 1, pageSize, filter: values }))
    }

  return (
  <div>
      <div>
          <UsersSearchForm onSubmit={onSubmit} filter={filter} />
      </div>
      <div>
        {
          <Pagination totalUsersCount={totalUsersCount}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={onPageChange}
          />
        }
      </div>
    { isFetching ? <Preloader /> : null }
      {
        users.map( (user) => <User key={user.id} followingInProgress={followingInProgress}
                                         unfollowUser={unfollowUser}
                                         followUser={followUser}
                                         user={user} />)
      }
    </div>
  )
}

export default withAuthRedirect(UsersPage);