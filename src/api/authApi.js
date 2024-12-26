import instance from './axiosInstance';

const getMyAuthData = async () => {
    return (await instance.get('auth/me'))?.data;
  }

  const getSignupData = async () => {
    return (await instance.get('auth/login'))?.data;
  }

  export default { getMyAuthData, getSignupData }