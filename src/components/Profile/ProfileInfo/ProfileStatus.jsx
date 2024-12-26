import { useState} from "react";


const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>{status || '-------'}</span>
        </div>
        }
        {editMode &&
          <div>
            <input onBlur={deactivateEditMode} value={status} onChange={onStatusChange}/>
          </div>
        }
      </div>
      )
      }

export default ProfileStatus;