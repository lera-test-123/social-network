import instance from './axiosInstance';
import {APIResponseType, ResultCodeEnum, ResultCodeForCaptcha} from "./types";

type AuthDataResponse = {
   id: number
  email: string
  login: string
}

type LoginResponseDataType = {
   userId: number
}

const getMyAuthData = async () => {
    return (await instance.get<APIResponseType<AuthDataResponse>>('auth/me'))?.data;
  }

  const login = async (email: string, password: string, rememberMe = false, captcha: string | null = null) => {
    return (await instance.post<APIResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeForCaptcha>>('auth/login', { email, password, rememberMe, captcha }))?.data;
  }

const logout = async () => {
  return (await instance.delete<APIResponseType>('auth/login'))?.data;
}

  export default { getMyAuthData, login, logout }