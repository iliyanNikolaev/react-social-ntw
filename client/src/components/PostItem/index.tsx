// css, icons
import styles from './post-item.module.css';
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
// interfaces
import { IPost } from '../../interfaces';
// components and utils
import { Link } from 'react-router-dom';
import { LikesModal, toggleLikesModal } from "../Modals/LikesModal";
import { CommentsModal, toggleCommentsModal } from '../Modals/CommentsModal';
import { useAuthContext } from '../../contexts/AuthContext';
import { useEffect, useRef, useState } from 'react';
import { getPostById } from '../../data/api';


export const PostItem = (
    { postId }: { postId: string }
) => {

    const [currentPost, setCurrentPost] = useState<IPost>();
    
    useEffect(() => {

        getPostById(postId).then(data => {
            setCurrentPost(data);
        });
    }, []);


    return (
        <div className={styles.container}>
            {currentPost && <>
                <PostUpper post={currentPost} />

                <PostLower post={currentPost} />

                <PostControls post={currentPost} />
            </>}
        </div>
    )
}

const PostUpper = (
    { post }: { post: IPost }
) => {
    return <div className={styles.upper}>
        <img className={styles.avatar} src={post?.owner.profilePic} alt="avatar" />
        <div className={styles.author}>
            <Link to={`/profile/${post.owner.id}`} className={styles.fullName}>{post.owner.firstName} {post.owner.lastName}</Link>
            <span className={styles.time}>2 hours ago</span>
        </div>
    </div>
}

const PostLower = (
    { post }: { post: IPost }
) => {
    return <div className={styles.lower}>
        <p className={styles.postContent}>{post?.textContent}</p>
        <img className={styles.postImg} src={post?.img} alt="post-image" />
    </div>
}

const PostControls = (
    { post }: { post: IPost }
) => {
    const { userData } = useAuthContext();
    const [liked, setLiked] = useState<boolean>(false);
    const likesCount = useRef(0);

    const toggleLike = () => {
        if (liked) {
            likesCount.current = likesCount.current - 1;
        } else {
            likesCount.current = likesCount.current + 1;
        }
        setLiked(prev => !prev);
    }

    useEffect(() => {
        likesCount.current = post.likes.length;
    }, [post]);


    return <div className={styles.controls}>
        {userData?.isAuth ? <>
            <LikesModal id={post.id} liked={liked}/>
            <CommentsModal id={post.id} />
            <div className={styles.actions}>
                <span className={styles.likeBtn} onClick={toggleLike}>
                    {liked ? <><BiSolidDislike className={styles.likeIcon} /> unlike</> : <><BiSolidLike className={styles.likeIcon} /> like</>}
                </span>
            </div>
        </> : null}

        <div className={styles.details}>
            {post && <>
                <span onClick={() => toggleLikesModal(post.id)} className={styles.viewLikesBtn}>{likesCount.current} likes</span>
                <span onClick={() => toggleCommentsModal(post.id)} className={styles.viewCommentsBtn}>{post.comments.length} comments</span>
            </>}
        </div>
    </div>
}
