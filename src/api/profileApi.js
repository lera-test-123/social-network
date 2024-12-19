import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
  withCredentials: true,
})

 export const getProfile = async (userId) => {
  return(await instance.get(`${userId}`))?.data
}