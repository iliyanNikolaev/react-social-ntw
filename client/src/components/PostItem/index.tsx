// css, icons
import styles from './post-item.module.css';
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
// interfaces
import { IPost } from '../../interfaces';
import { IUserData } from '../../interfaces';
// components and utils
import { Link } from 'react-router-dom';
import { LikesModal, toggleLikesModal } from "../Modals/LikesModal";
import { CommentsModal, toggleCommentsModal } from '../Modals/CommentsModal';
import { useAuthContext } from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';

type PostItemProp = { post: IPost | undefined, userData?: IUserData, liked?: boolean, toggleLike?: () => void };

export const PostItem = (
    { post }: PostItemProp
) => {
    // todo... this component needs only id and he will fetch postData and saved in state
    const { userData } = useAuthContext();
    const [liked, setLiked] = useState<boolean>(false);


    useEffect(() => {

        post?.likes.forEach(l => {
            if(l.id == userData.id) {
                setLiked(true);
            }
        })
    }, []);

    const toggleLike = () => {
        if(liked) {
            
        } else {

        }
        setLiked(prev => !prev);
    }

    return (
        //init modals on the page
        <div className={styles.container}>
            {post && <>
                <LikesModal id={post.id} likes={post.likes} />

                <CommentsModal id={post.id} comments={post?.comments} />

                <PostUpper post={post} userData={userData} />

                <PostLower post={post} userData={userData} />

                <PostControls post={post} userData={userData} liked={liked} toggleLike={toggleLike}/>
            </>}
        </div>
    )
}

const PostUpper = (
    { post }: PostItemProp
) => {
    return <div className={styles.upper}>
        <img className={styles.avatar} src={post?.owner.profilePic} alt="avatar" />
        <div className={styles.author}>
            <Link to={`/profile/${post?.owner.id}`} className={styles.fullName}>{post?.owner.firstName} {post?.owner.lastName}</Link>
            <span className={styles.time}>2 hours ago</span>
        </div>
    </div>
}

const PostLower = (
    { post }: PostItemProp
) => {
    return <div className={styles.lower}>
        <p className={styles.postContent}>{post?.textContent}</p>
        <img className={styles.postImg} src={post?.img} alt="post-image" />
    </div>
}

const PostControls = (
    { post, userData, liked, toggleLike }: PostItemProp
) => {
    return <div className={styles.controls}>
        {userData?.isAuth ? <>
            <div className={styles.actions}>
                <span className={styles.likeBtn} onClick={toggleLike}>
                    { liked ? <><BiSolidDislike className={styles.likeIcon} /> unlike</> : <><BiSolidLike className={styles.likeIcon} /> like</>}
                </span>
            </div>
        </> : null}

        <div className={styles.details}>
            {post && <>
                <span onClick={() => toggleLikesModal(post.id)} className={styles.viewLikesBtn}>{post?.likes.length} likes</span>
                <span onClick={() => toggleCommentsModal(post.id)} className={styles.viewCommentsBtn}>{post?.comments.length} comments</span>
            </>}
        </div>
    </div>
}
