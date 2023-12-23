//css, icons
import styles from './create-post.module.css';
import { MdAddPhotoAlternate } from "react-icons/md";


export const CreatePost = () => {
  return (
    <div className={styles.container}>

      <p className={styles.heading}>Add new post</p>
      
      <textarea className={styles.text} rows={2}></textarea>
      
      <AddPhoto />
      
      <button className={styles.btn}>post</button>
   
    </div>
  )
}

const AddPhoto = () => {
  return <label htmlFor='file' className={styles.addFile}>
    <div className={styles.addFileBtn}>
      add photo
      <MdAddPhotoAlternate className={styles.addVisible} />
    </div>

    <input id='file' className={styles.addHidden} type="file" />
  </label>
}