import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "./LoginForm.module.scss";


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .min(2, 'Password must be at least 2 characters')
    .max(15, 'Password must be at most 15 characters!')
    .required('Password is required'),
})

const LoginForm = (props) => {
  return (
    <div className={styles.formBlock}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={data => console.log(data)} >
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
              <Field id="password" name='password' type='text' placeholder='Password'/>
              {errors.password && touched.password ? (
                <div className={styles.error}>{errors.password}</div>
              ) : null}
            </div>
            <div className={styles.rememberBlock}>
              <Field id="rememberMe" name='rememberMe' type='checkbox'/>
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm;
