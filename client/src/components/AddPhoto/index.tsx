import { MdAddPhotoAlternate } from 'react-icons/md';
import styles from './add-photo.module.css';

export const AddPhoto = ({type}: {type: string}) => {
  return <div className={styles.photoContainer}>
  {/* <RiLockPasswordLine className={styles.icon} /> */}
  <span className={styles.photoSpan}>add {type} picture</span>
  <label htmlFor='file' className={styles.addFile}>
    <div className={styles.addFileBtn}>
      <MdAddPhotoAlternate className={styles.addVisible} />
    </div>

    <input id='file' className={styles.addHidden} type="file" />
  </label>
</div>
}