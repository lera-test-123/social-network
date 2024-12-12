import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
              <span>{props.profile.fullName}</span>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;