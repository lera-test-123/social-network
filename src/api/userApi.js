import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'f2c45c51-10dc-48f1-aef7-f93775c76652'
  }
});

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

