//css, icons
import styles from './create-post.module.css';
//components
import { AddPhoto } from '../AddPhoto';


export const CreatePost = () => {
  return (
    <div className={styles.container}>

      <p className={styles.heading}>Add new post</p>
      
      <textarea className={styles.text} rows={2}></textarea>
      
      <AddPhoto type='post'/>
      
      <button className={styles.btn}>post</button>
   
    </div>
  )
}
