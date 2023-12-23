//css, icons
import styles from './home.module.css';
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
//interfaces
import { IPost } from "../../interfaces";
//hooks
import { useEffect, useState } from "react";
//services
import { getPosts } from "../../data/api";
//components
import { CreatePost } from '../../components/CreatePost';
import { PostList } from "../../components/PostList";


export const Home = () => {

  const { posts } = useHome();

  return (
    <div className={styles.wrapper}>

      <div className={styles.container}>
        <CreatePost />

        <PostList posts={posts} />

        <HomePaginationControls />
      </div>
    </div>
  )
}

const useHome = () => {
  const [posts, setPosts] = useState<IPost[] | undefined>();

  useEffect(() => {
    const currentPosts = getPosts();
    setPosts(currentPosts);
  }, []);

  return { posts };
}

const HomePaginationControls = () => {
  return <div className={styles.controls}>
    <button className={styles.btn}><TbPlayerTrackPrevFilled /> {'Prev'}</button>
    <button className={styles.btn}>{'Next'}<TbPlayerTrackNextFilled /></button>
  </div>
}