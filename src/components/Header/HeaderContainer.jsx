import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import authThunk from "../../redux/auth/authThunks";

const HeaderContainer = () => {
  const { userId, email, login, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authThunk.getCurrentUser())
  }, []);

  const logout = () => {
    dispatch(authThunk.logout());
  }

  return (
    <Header {...{ userId, email, login, isAuth, logout }}/>
  )
}

export default HeaderContainer;