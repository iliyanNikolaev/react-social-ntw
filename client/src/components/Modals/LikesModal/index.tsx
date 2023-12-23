import { IUserLean } from "../../../interfaces";
import { Modal } from "../../Modal"
import styles from './likes-modal.module.css';

type LikesModalPropsType = { likes: IUserLean[] | undefined }

export const LikesModal = (
  { likes }:
    LikesModalPropsType
) => {
  return (
    <Modal label="likes-modal">
      <div className={styles.container}>
        <h3>likes</h3>
        <div className={styles.content}>
          {likes?.length == 0 && <p>No likes yet..</p>}
          {likes?.map(x => <Like key={x.id} user={x} />)}
        </div>
      </div>
    </Modal>
  )
}

const Like = (
  { user }:
    { user: IUserLean }
) => <div className={styles.like}>
    <img className={styles.avatar}
      src={user.profilePic} alt="avatar" />
    <span className={styles.fullName}>{user.firstName} {user.lastName}</span>
  </div>