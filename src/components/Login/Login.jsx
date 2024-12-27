import {useDispatch, useSelector} from "react-redux";
import { Navigate } from "react-router-dom";

import LoginForm from "./LoginForm/LoginForm";
import styles from "./Login.module.scss";
import authThunk from "../../redux/auth/authThunks";


const Login = (props) => {

  const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log(values);
    dispatch(authThunk.login( { email: values.email, password: values.password, rememberMe: values.rememberMe }));
  }

  if (isAuth) {
    return <Navigate to='/profile' />
  }

  return <div className={styles.loginForm}>
    <h1>Login</h1>
    <LoginForm onSubmit={onSubmit}/>
  </div>
}

export default Login;