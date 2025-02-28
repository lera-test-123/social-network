import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "../../Login/LoginForm/LoginForm.module.scss";
import { ProfileType } from "../../../redux/profile/type";

const urlValidation = Yup.string()
  .nullable()
  .matches(
    /^(https?:\/\/)?(www\.)?(facebook|instagram|twitter|vk|youtube|website|github|mainLink)\.com\/[A-Za-z0-9._-]+\/?$/,
    'Please enter the correct social network address (for example, https://facebook.com/username)'
  );

const SignupSchema = Yup.object().shape({
  contacts: Yup.lazy((value) =>
    Yup.object(
      Object.keys(value || {}).reduce((acc, key) => {
        (acc as any)[key] = urlValidation;
        return acc;
      }, {})
    )
  ),
});

type ProfileDataFormProps = {
    profile: ProfileType
    onSubmit: (formData: ProfileType) => void
}

const ProfileDataForm = (props: ProfileDataFormProps) => {

  return (
    <div className={styles.formBlock}>
      <Formik
        initialValues={{
          fullName: props.profile.fullName,
          lookingForAJob: props.profile.lookingForAJob,
          lookingForAJobDescription: props.profile.lookingForAJobDescription,
          aboutMe: props.profile.aboutMe,
          contacts: props.profile.contacts,
        }}
        validationSchema={SignupSchema}
        onSubmit={props.onSubmit} >
        {({ errors, touched}) => (
          <Form>
            <div>
              <button type="submit">Save</button>
            </div>
            <div>
              <label htmlFor="fullName"><b>Full name:</b></label>
              <Field id="fullName" name='fullName' type='text' placeholder='Full name'/>
              {errors.fullName && touched.fullName ? (
                <div className={styles.error}>{errors.fullName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="lookingForAJob"><b>Looking for a job:</b></label>
              <Field id="lookingForAJob" name='lookingForAJob' type='checkbox' placeholder=''/>
              {errors.lookingForAJob && touched.lookingForAJob ? (
                <div className={styles.lookingForAJob}>{errors.lookingForAJob}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="lookingForAJobDescription"><b>My professional skills:</b></label>
              <Field id="lookingForAJobDescription" name='lookingForAJobDescription' as='textarea'
                     placeholder='My professional skills'/>
              {errors.lookingForAJobDescription && touched.lookingForAJobDescription ? (
                <div className={styles.error}>{errors.lookingForAJobDescription}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="aboutMe"><b>About me:</b></label>
              <Field id="aboutMe" name='aboutMe' as='textarea'
                     placeholder='About me'/>
              {errors.aboutMe && touched.aboutMe ? (
                <div className={styles.error}>{errors.aboutMe}</div>
              ) : null}
            </div>
            <div>
              <b>Contacts:</b> {Object.keys(props.profile?.contacts || {}).map(key => {
              return <div key={key} className={styles.contact}>
                <label htmlFor={`contacts.${key}`}><b>{key}:</b></label>
                  <Field id={`contacts.${key}`}
                         name={`contacts.${key}`}
                         type='text'
                         placeholder={key}
                  />
                {errors.contacts && touched.contacts ? ( // @ts-ignore
                  <div className={styles.error}>{errors.contacts[key]}</div>
                ) : null}
              </div>
            })}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ProfileDataForm;