// icons
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

import { CreatePost } from '../../components/CreatePost';
import styles from './home.module.css';
import { useEffect, useState } from "react";
import { IPost } from "../../interfaces";
import { getPosts } from "../../data/service";
import { PostList } from "../../components/PostList";

export const Home = () => {
  const [posts, setPosts] = useState<IPost[] | undefined>();

  useEffect(() => {
    const currentPosts = getPosts();
    setPosts(currentPosts);
  }, []);

  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
              <CreatePost />
             
              <PostList posts = {posts} />
             <div className={styles.controls}>
              <button className={styles.btn}><TbPlayerTrackPrevFilled /> {'Prev'}</button>
              <button className={styles.btn}>{'Next'}<TbPlayerTrackNextFilled /></button>
             </div>
        </div>
    </div>
  )
}
