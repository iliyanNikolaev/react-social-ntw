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
             <PostItem />
             <PostItem />
             <PostItem />
        </div>
    </div>
  )
}
