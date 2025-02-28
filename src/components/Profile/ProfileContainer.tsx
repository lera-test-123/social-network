import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Profile from "./Profile";
import profileThunk from "../../redux/profile/thunks";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { ProfileFormType}  from "../../redux/profile/type";


const ProfileContainer = () => {
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
      <Profile />
    )
}

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default withAuthRedirect(ProfileContainer);
