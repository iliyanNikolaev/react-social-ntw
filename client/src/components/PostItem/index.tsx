// css, icons
import styles from './post-item.module.css';
import { BiSolidLike } from "react-icons/bi";
// interfaces
import { IPost } from '../../interfaces';
// components and utils
import { Link } from 'react-router-dom';
import { LikesModal, toggleLikesModal } from "../Modals/LikesModal";
import { CommentsModal, toggleCommentsModal } from '../Modals/CommentsModal';
import { UserDataType, useAuthContext } from '../../contexts/AuthContext';

type PostItemProp = { post: IPost | undefined, userData: UserDataType };

export const PostItem = (
    { post }: PostItemProp
) => {

    const { userData } = useAuthContext();

    return (
        //init modals on the page
        <div className={styles.container}>
            {post && <>
                <LikesModal id={post.id} likes={post.likes} />

                <CommentsModal id={post.id} comments={post?.comments} />

                <PostUpper post={post} userData={userData} />

                <PostLower post={post} userData={userData} />

                <PostControls post={post} userData={userData} />
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
    { post, userData }: PostItemProp
) => {
    return <div className={styles.controls}>
        {userData.isAuth ? <>
            <div className={styles.actions}>
                <span className={styles.likeBtn}>
                    <BiSolidLike className={styles.likeIcon} /> like
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
