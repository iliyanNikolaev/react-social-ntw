import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';
import styles from './profile.module.css';

//icons
import { SlUserFollow } from "react-icons/sl";
import { useEffect, useState } from 'react';


import { useParams } from 'react-router-dom';

import { IPost, IUser } from '../../interfaces';
import { getUser, getPosts } from '../../data/service';
import { PostList } from '../../components/PostList';
import { toggleModal } from '../../components/Modal';

export const Profile = () => {
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState<IUser | undefined>();
  const [currentPosts, setCurrentPosts] = useState<IPost[] | undefined>();
  useEffect(() => {
    const user = getUser(id);
    setCurrentUser(user);
    const posts = getPosts();
    setCurrentPosts(posts);
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {!currentUser && <p>Loading...</p>}

        {currentUser && <>
          <div className={styles.upper}>
            <img className={styles.cover} src={currentUser.coverPic} alt="cover" />
            <img className={styles.avatar} src={currentUser.profilePic} alt="avatar" />

            <span className={styles.fullName}>{currentUser.firstName} {currentUser.lastName}</span>
          </div>

          <div className={styles.lower}>
            <div className={styles.controls}>
              <span
              onClick={() => toggleModal('connections-modal')}
              className={styles.connectionsBtn}
              >
                {currentUser.connections.length} connections
              </span>
              <button className={styles.btn}><SlUserFollow /> connect</button>
            </div>
          </div>

          <div className={styles.posts}>
            <PostList posts={currentPosts} />
          </div>

          <div className={styles.controlsPagination}>
            <button className={styles.btnPagination}><TbPlayerTrackPrevFilled /> {'Prev'}</button>
            <button className={styles.btnPagination}>{'Next'}<TbPlayerTrackNextFilled /></button>
          </div>
        </>}
      </div>

    </div>
  )
}
