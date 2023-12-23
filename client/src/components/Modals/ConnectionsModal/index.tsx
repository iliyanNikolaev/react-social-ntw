import styles from './connentions-modal.module.css';
import { Modal, toggleModal } from "../../Modal"
import { IUserLean } from '../../../interfaces';

type ConnectionsModalPropsType = { connections: IUserLean[] | undefined }

export const toggleConnectionsModal = () => {
  toggleModal('connections-modal');
}

export const ConnectionsModal = (
  { connections }:
    ConnectionsModalPropsType
) => {
  return (
    <Modal label="connections-modal">
      <div className={styles.container}>
        <h3>connections</h3>
        <div className={styles.content}>
          {connections?.length == 0 && <p>No connections yet..</p>}
          {connections?.map(x => <Connection key={x.id} user={x} />)}
        </div>
      </div>
    </Modal>
  )
}

const Connection = (
  { user }:
    { user: IUserLean }
) => <div className={styles.connection}>
    <img className={styles.avatar}
      src={user.profilePic} alt="avatar" />
    <span className={styles.fullName}>{user.firstName} {user.lastName}</span>
  </div>