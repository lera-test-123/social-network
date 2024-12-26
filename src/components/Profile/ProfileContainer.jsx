import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Profile from "./Profile";
import profileThunk from "../../redux/profile/profileThunks";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";



const ProfileContainer = (props) => {
  const { profile, status } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  let { userId } = useParams();

  useEffect(() => {
    if(!userId) {
      userId = 31966;
    }
    dispatch(profileThunk.getProfileUser(userId))
    dispatch(profileThunk.getStatus(userId))
  },[userId]);

  const updateUserStatus = (status) => {
    dispatch(profileThunk.updateStatus(status));
  }

  return (
      <Profile {...{ profile, status, updateUserStatus }} />
    )
}

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default withAuthRedirect(ProfileContainer);
