// css, icons
import styles from './post-item.module.css';
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
// components and utils
import { Link } from 'react-router-dom';
import { LikesModal, toggleLikesModal } from "../Modals/LikesModal";
import { CommentsModal, toggleCommentsModal } from '../Modals/CommentsModal';
import { useAuthContext } from '../../contexts/AuthContext';


export const PostItem = () => {

    return (
        <div className={styles.container}>
                <PostUpper />

                <PostLower />

                <PostControls />
        </div>
    )
}

const PostUpper = () => {
    return <div className={styles.upper}>
        <img className={styles.avatar} src="/user.png" alt="avatar" />
        <div className={styles.author}>
            <Link to={`/profile/1`} className={styles.fullName}>John Doe</Link>
            <span className={styles.time}>2 hours ago</span>
        </div>
    </div>
}

const PostLower = () => {
    return <div className={styles.lower}>
        <p className={styles.postContent}>This is hardcoded post</p>
        <img className={styles.postImg} src="/insta.webp" alt="post-image" />
    </div>
}

const PostControls = () => {
    const { userData } = useAuthContext();
    const id = Math.random().toString();
    return <div className={styles.controls}>
        {userData?.isAuth ? <>
            <LikesModal id={id} />
            <CommentsModal id={id} />
            <div className={styles.actions}>
                <span className={styles.likeBtn}>
                    {false ? <><BiSolidDislike className={styles.likeIcon} /> unlike</> : <><BiSolidLike className={styles.likeIcon} /> like</>}
                </span>
            </div>
        </> : null}

        <div className={styles.details}>
        <span className={styles.viewLikesBtn} onClick={() => toggleLikesModal(id)}>0 likes</span>
        <span className={styles.viewCommentsBtn} onClick={() => toggleCommentsModal(id)}>0 comments</span>
        </div>
    </div>
}
