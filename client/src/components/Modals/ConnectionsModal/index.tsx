import styles from './connentions-modal.module.css';
import { Modal } from "../../Modal"

export const ConnectionsModal = () => {
  return (
    <Modal label="connections-modal">
      <div className={styles.container}>
        <h1>this is the connections modal</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores debitis asperiores commodi iste temporibus. Unde totam error illum inventore dicta?</p>
      </div>
    </Modal>
  )
}
