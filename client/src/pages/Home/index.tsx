import { CreatePost } from '../../components/CreatePost';
import styles from './home.module.css';

export const Home = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
              <CreatePost />
             <div className={styles.temp}>post</div>
             <div className={styles.temp}>post</div>
             <div className={styles.temp}>post</div>
             <div className={styles.temp}>post</div>
             <div className={styles.temp}>post</div>
             <div className={styles.temp}>post</div>
             <div className={styles.temp}>post</div>
             <div className={styles.temp}>post</div>
             <div className={styles.temp}>post</div>
             <div className={styles.temp}>post</div>
             <div className={styles.temp}>post</div>
             <div className={styles.temp}>post</div>
             <div className={styles.temp}>post</div>
        </div>
    </div>
  )
}
