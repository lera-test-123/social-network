import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Profile from "./Profile";
import { getProfileUser } from "../../redux/profile/profileThunk";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


const ProfileContainer = () => {
  const { profile } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  let { userId } = useParams();


  useEffect(() => {
    if(!userId) {
      userId = 31966;
    }
    dispatch(getProfileUser(userId))
  },[userId]);

  return (
    <Profile {...{profile}} />
    )
}

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default withAuthRedirect(ProfileContainer);
