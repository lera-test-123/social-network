import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileSlice";



const ProfileContainer = () => {
  const { profile } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  let { userId } = useParams();


  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ?? 2}`)
      .then((res) => {
        dispatch(setUserProfile(res.data));
      })
  }, []);

  return (
    <Profile profile={profile} />
    )
}

export default ProfileContainer;
