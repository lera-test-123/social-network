import styles from "./ProfileInfo.module.scss";
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/userPhoto.jpg'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

    return (
        <div className={styles.container}>
            <div>
                {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s"*/}
                {/*     alt=""/>*/}
              <img src={props.profile.photos.large ?? userPhoto} alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
              <span>{props.profile.fullName}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;