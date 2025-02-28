import instance from './axiosInstance';
import { UserType } from "../redux/users/type";
import { APIResponseType } from "./types";


type GetUsersResponse = {
  items: UserType[];
  totalCount: number
  error: string | null
}

const getUsers = async (currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null ) => {
  // return (await instance.get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSize}&term=${term}${friend !== null ? `friend=${friend}` : ''}`))?.data;

  return (await instance.get<GetUsersResponse>('users', {
    params: {
      page: currentPage,
      term: term,
      ...(friend !== null ? { friend } : {})
    }
  }))?.data
}

const followUser = async (userId: number) => {
  return (await instance.post<APIResponseType>(`follow/${userId}`))?.data
}

const unfollowUser = async (userId: number) => {
  return (await instance.delete<APIResponseType>(`follow/${userId}`))?.data
}

export default { getUsers, followUser, unfollowUser }

