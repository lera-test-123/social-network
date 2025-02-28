import { useState } from "react";

import styles from "./ProfileInfo.module.scss";
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/userPhoto.jpg'
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";
import { ProfileData } from "./ProfileData";
import { ProfilePropsType } from "../Profile";
import {ProfileType} from "../../../redux/profile/type";


const ProfileInfo = (props: ProfilePropsType) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile?.userId) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: any ) => {
    if (e.target.files.length) {
      props.saveUserPhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData: ProfileType) => {
    props.saveProfileInfo(formData);
    setEditMode(false);
  }



  return (
      <div className={styles.container}>
        <div>
          {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s"*/}
          {/*     alt=""/>*/}
          <img src={props.profile.photos?.large ?? userPhoto} alt=""/>
          {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        </div>

        { editMode
          ? <ProfileDataForm profile={props.profile} onSubmit={onSubmit} />
          : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={ () => setEditMode(true) }/> }

        <div className={styles.descriptionBlock}>
          {/*<span>{props.profile.fullName}</span>*/}
          <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}
                         isOwner={props.isOwner}/>
        </div>
      </div>
    )
}

export default ProfileInfo;