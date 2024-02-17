//css, icons
import styles from './home.module.css';
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { MdOutlineLogin } from "react-icons/md";
//interfaces
//hooks
import { useAuthContext } from '../../contexts/AuthContext';
//components
import { CreatePost } from '../../components/CreatePost';
import { PostList } from "../../components/PostList";
import { Link } from 'react-router-dom';


export const Home = () => {

  const { userData } = useAuthContext();

  return (
    <div className={styles.wrapper}>

      <div className={styles.container}>
        {userData.isAuth ? <CreatePost /> : <HomeUpperNotLogged />}

        {<PostList />}

        <HomePaginationControls />
      </div>
    </div>
  )
}



const HomePaginationControls = () => {
  return <div className={styles.controls}>
    <button className={styles.btn}><TbPlayerTrackPrevFilled /> {'Prev'}</button>
    <button className={styles.btn}>{'Next'}<TbPlayerTrackNextFilled /></button>
  </div>
}

const HomeUpperNotLogged = () => {
  return <div className={styles.notLogged}>
    <Link to='/login' className={styles.loginText}>
      <MdOutlineLogin className={styles.loginIcon} />
      Login here
    </Link>
  </div>
}