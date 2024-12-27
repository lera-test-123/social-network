import instance from './axiosInstance';

const getMyAuthData = async () => {
    return (await instance.get('auth/me'))?.data;
  }

  const login = async (email, password, rememberMe = false) => {
    return (await instance.post('auth/login', { email, password, rememberMe }))?.data;
  }

const logout = async () => {
  return (await instance.delete('auth/login'))?.data;
}

  export default { getMyAuthData, login, logout }