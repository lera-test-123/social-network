import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import {getCurrentUser} from "../../redux/auth/authThunk";

const HeaderContainer = () => {
  const { userId, email, login, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, []);

  return (
    <Header {...{ userId, email, login, isAuth }}/>
  )
}

export default HeaderContainer;