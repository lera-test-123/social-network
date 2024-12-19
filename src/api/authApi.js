import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
  withCredentials: true
})

  export const getMyAuthData = async () => {
    return (await instance.get('me'))?.data;
  }