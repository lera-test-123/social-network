import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import { setAuthUserData } from "../../redux/authSlice";

const HeaderContainer = () => {
  const { userId, email, login, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const setUserData = (userData) => {
    dispatch(setAuthUserData(userData));
  }

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.resultCode === 0) {
          let { id: userId, email, login } = res.data.data;
          setUserData({ userId, email, login });
        }
      });
  }, []);

  return (
    <Header {...{ userId, email, login, isAuth }}/>
  )
}

export default HeaderContainer;