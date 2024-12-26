import instance from './axiosInstance';

const getProfile = async (userId) => {
  return (await instance.get(`profile/${userId}`))?.data;
}

const getStatus = async (userId) => {
  return (await instance.get(`profile/status/${userId}`));
}

const updateStatus = async (status) => {
  return (await instance.put(`profile/status`, { status: status }));
}

export default { getProfile, getStatus, updateStatus }