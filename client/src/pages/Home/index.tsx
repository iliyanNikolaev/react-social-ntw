// icons
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

import { CreatePost } from '../../components/CreatePost';
import { PostItem } from '../../components/PostItem';
import styles from './home.module.css';

export const Home = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
              <CreatePost />
             
             <PostItem />
             <PostItem />
             <PostItem />

             <div className={styles.controls}>
              <button className={styles.btn}><TbPlayerTrackPrevFilled /> {'Prev'}</button>
              <button className={styles.btn}>{'Next'}<TbPlayerTrackNextFilled /></button>
             </div>
        </div>
    </div>
  )
}
