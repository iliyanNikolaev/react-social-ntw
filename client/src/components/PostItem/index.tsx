// css, icons
import styles from './post-item.module.css';
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
// components and utils
import { Link } from 'react-router-dom';
import { LikesModal, toggleLikesModal } from "../Modals/LikesModal";
import { CommentsModal, toggleCommentsModal } from '../Modals/CommentsModal';
import { useEffect, useState } from 'react';

export const PostItem = () => {
    const [id, setId] = useState<string>('')
    useEffect(() => {
        setId(String(Math.random()));
    }, []);

    return (
        <div className={styles.container}>
            <PostUpper id={id} />

            <PostLower />

            <PostControls />
        </div>
    )
}

const PostUpper = ({ id }: { id: string }) => {
    return <div className={styles.upper}>
        <img className={styles.avatar} src="/user.png" alt="avatar" />
        <div className={styles.author}>
            <Link to={`/profile/` + id} className={styles.fullName}>John Doe</Link>
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
    let [likes, setLikes] = useState(0);
    let [isLiked, setIsLiked] = useState(false);
    function handleLikeClick() {
        setIsLiked(prev => !prev);
        setLikes(prev => prev + 1);
    }
    function handleUnlikeClick() {
        setIsLiked(prev => !prev);
        setLikes(prev => prev - 1);
    }
    const [id, setId] = useState<string>('random');
    useEffect(() => {
        setId(Math.random().toString());
    }, []);
    return <div className={styles.controls}>
        <>
            <LikesModal id={id} />
            <CommentsModal id={id} />
            <div className={styles.actions}>
                {isLiked ?
                    <span className={styles.likeBtn} onClick={() => handleUnlikeClick()}>
                        <BiSolidDislike className={styles.likeIcon} /> unlike
                    </span>
                    : <span className={styles.likeBtn} onClick={() => handleLikeClick()}>
                        <BiSolidLike className={styles.likeIcon} /> like
                    </span>
                }
            </div>
        </>

        <div className={styles.details}>
            <span className={styles.viewLikesBtn} onClick={() => toggleLikesModal(id)}>{likes} likes</span>
            <span className={styles.viewCommentsBtn} onClick={() => toggleCommentsModal(id)}>0 comments</span>
        </div>
    </div>
}
