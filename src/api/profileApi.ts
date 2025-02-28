import instance from './axiosInstance';
import { PhotosType, ProfileType } from "../redux/profile/type";
import { APIResponseType } from "./types";

type Photo = {
  photos: PhotosType
}


const getProfile = async (userId: number) => {
  return (await instance.get<Exclude<ProfileType, 'aboutMe'>>(`profile/${userId}`))?.data;
}

const getStatus = async (userId: number) => {
  return (await instance.get<string>(`profile/status/${userId}`))?.data;
}

const updateStatus = async (status: string | null) => {
  return (await instance.put<APIResponseType>(`profile/status`, { status: status }));
}

const savePhoto = async (file: string) => {
  const formData = new FormData();
  formData.append('file', file);
  return (await instance.put<APIResponseType<Photo>>(`profile/photo`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  }));
}

const updateProfileInfo = async (profile: ProfileType) => {
  return (await instance.put<APIResponseType>(`profile`, profile))?.data;
}

export default { getProfile, getStatus, updateStatus, savePhoto, updateProfileInfo }