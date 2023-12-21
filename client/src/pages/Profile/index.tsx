import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';
import { PostItem } from '../../components/PostItem';
import styles from './profile.module.css';

//icons
import { SlUserFollow } from "react-icons/sl";

export const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <img className={styles.cover} src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cover" />
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/121745595?v=4" alt="avatar" />

          <span className={styles.fullName}>Iliyan Nikolaev</span>
        </div>

        <div className={styles.lower}>
          <div className={styles.controls}>
            <span>39 connections</span>
            <button className={styles.btn}><SlUserFollow /> connect</button>
          </div>
        </div>

        <div className={styles.posts}>
          <PostItem />
          <PostItem />
          <PostItem />
        </div>

        <div className={styles.controlsPagination}>
              <button className={styles.btnPagination}><TbPlayerTrackPrevFilled /> {'Prev'}</button>
              <button className={styles.btnPagination}>{'Next'}<TbPlayerTrackNextFilled /></button>
             </div>
      </div>
    </div>
  )
}
