import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "./LoginForm.module.scss";
import { LoginValuesType } from "../Login";

type PropsType = {
    onSubmit: (values: LoginValuesType) => void
    captchaUrl: string | null
}


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .min(2, 'Password must be at least 2 characters')
    .max(15, 'Password must be at most 15 characters!')
    .required('Password is required'),
})

const LoginForm = (props: PropsType) => {

  return (
    <div className={styles.formBlock}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={props.onSubmit} >
        {({ errors, touched}) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field id="email" name='email' type='email' placeholder='Enter your email'/>
              {errors.email && touched.email ? (
                <div className={styles.error}>{errors.email}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field id="password" name='password' type='password' placeholder='Password'/>
              {errors.password && touched.password ? (
                <div className={styles.error}>{errors.password}</div>
              ) : null}
            </div>
            <div className={styles.rememberBlock}>
              <Field id="rememberMe" name='rememberMe' type='checkbox'/>
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            { props.captchaUrl && <img src={props.captchaUrl} /> }
            { props.captchaUrl &&  <Field id="captcha" name='captcha' type='text' placeholder='Type the text'/> }
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm;
