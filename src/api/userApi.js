import instance from './axiosInstance';

const getUsers = async (currentPage = 1, pageSize = 10) => {
  return (await instance.get(`users?page=${currentPage}&count=${pageSize}`))?.data
}

const followUser = async (userId) => {
  return (await instance.post(`follow/${userId}`))?.data
}

const unfollowUser = async (userId) => {
  return (await instance.delete(`follow/${userId}`))?.data
}

export default { getUsers, followUser, unfollowUser }

