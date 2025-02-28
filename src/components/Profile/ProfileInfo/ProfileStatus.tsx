import { useEffect, useState } from "react";


type ProfileStatusProps = {
  status: string
  isOwner: boolean
  updateUserStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusProps) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status)
  }

  const onStatusChange = (e: any) => {
    setStatus(e.target.value);
  }

  return (
    <div>
      {!editMode &&
        <div>
         <b>Status:</b> <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
        </div>
        }
        {editMode &&
          <div>
            <input autoFocus={true} onBlur={deactivateEditMode} value={status} onChange={onStatusChange}/>
          </div>
        }
      </div>
      )
      }

export default ProfileStatus;