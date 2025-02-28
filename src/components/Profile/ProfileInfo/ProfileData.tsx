import styles from "./ProfileInfo.module.scss";
import {ContactsKeysType, ProfileType} from "../../../redux/profile/type";

type ProfileDataProps = {
    isOwner: boolean
    profile: ProfileType
    goToEditMode: () => void
}

export const ProfileData = (props: ProfileDataProps) => {
  return (
    <div>
      { props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
      <div>
        <b>Full name</b> {props.profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {props.profile.lookingForAJob && <div><b>My professional skills</b> {props.profile.lookingForAJobDescription}
      </div>}
      <div>
        <b>About me:</b> {props.profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b> {Object.keys(props.profile?.contacts || {}).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={props.profile?.contacts?.[key as ContactsKeysType] || ''}/>
      })}
      </div>
    </div>
  )
}

const Contact = ({contactTitle, contactValue}: {contactTitle: string, contactValue: string}) => {
  return <div className={styles.contact}>
    <b>{contactTitle}:</b> {contactValue}
  </div>
}