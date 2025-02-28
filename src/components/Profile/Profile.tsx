import styles from './Profile.module.scss'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfileFormType, ProfileType } from "../../redux/profile/type";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import profileThunk from "../../redux/profile/thunks";


export type ProfilePropsType = {
    profile: ProfileType | null;
    status: string
    isOwner: boolean
    updateUserStatus: (status: string) => void
    saveUserPhoto: (file: string) => void
    saveProfileInfo: (profile: ProfileFormType) => void
}

const Profile = () => {
    const { profile, status } = useAppSelector((state) => state.profile);
    const { userId: authorizedUserId } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    let { userId } = useParams();
    let isOwner = !userId;

    useEffect(() => {
        if (authorizedUserId) {
            const userIdToUse = userId ? Number(userId) : authorizedUserId;

            dispatch(profileThunk.getProfileUser(userIdToUse))
            dispatch(profileThunk.getStatus(userIdToUse))
        }
    }, [userId]);

    const updateUserStatus = (status: string) => {
        dispatch(profileThunk.updateStatus(status));
    }

    const saveUserPhoto = (file: string) => {
        dispatch(profileThunk.savePhoto(file))
    }

    const saveProfileInfo = (profile: ProfileFormType) => {
        dispatch(profileThunk.saveProfileInfo(profile));
    }

  return (
    <div>
      <ProfileInfo
        saveProfileInfo={saveProfileInfo}
        isOwner={isOwner}
        status={status}
        updateUserStatus={updateUserStatus}
        saveUserPhoto={saveUserPhoto}
        profile={profile}
      />
      <MyPostsContainer />
    </div>)
}

export default Profile;