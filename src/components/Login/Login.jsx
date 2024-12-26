import LoginForm from "./LoginForm/LoginForm";
import styles from "./Login.module.scss";

const Login = (props) => {
  return <div className={styles.loginForm}>
    <h1>Login</h1>
    <LoginForm />
  </div>
}

export default Login;