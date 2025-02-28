import { Navigate } from "react-router-dom";

import LoginForm from "./LoginForm/LoginForm";
import styles from "./Login.module.scss";
import authThunk from "../../redux/auth/thunks";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";


 export type LoginValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: string
}

const Login = () => {
  const { isAuth, errorMessages, captchaUrl } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const onSubmit = (values: LoginValuesType) => {
    dispatch(authThunk.login( { email: values.email, password: values.password, rememberMe: values.rememberMe, captcha: values.captcha }));
  }

  if (isAuth) {
    return <Navigate to='/profile' />
  }
  return <div className={styles.loginForm}>
    <h1>Login</h1>
    { errorMessages?.length
      ? (
        <div style={{ color: 'red' }}>{errorMessages[0]}</div>
      )
    : null
    }
    <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
  </div>
}

export default Login;