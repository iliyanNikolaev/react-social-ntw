// css, icons
import styles from './post-item.module.css';
import { BiSolidLike } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
// interfaces
import { IPost } from '../../interfaces';
// components and utils
import { Link } from 'react-router-dom';
import { LikesModal, toggleLikesModal } from "../Modals/LikesModal";
import { CommentsModal, toggleCommentsModal } from '../Modals/CommentsModal';

type PostItemProp = { post: IPost | undefined };

export const PostItem = (
    { post }: PostItemProp
) => {

    return (
        //init modals on the page
        <div className={styles.container}>
            {post && <>
                <LikesModal id={post.id} likes={post.likes} />

                <CommentsModal id={post.id} comments={post?.comments} />

                <PostUpper post={post} />

                <PostLower post={post} />

                <PostControls post={post} />
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
    { post }: PostItemProp
) => {
    return <div className={styles.controls}>

        <div className={styles.actions}>
            <span className={styles.likeBtn}>
                <BiSolidLike className={styles.likeIcon} /> like
            </span>
            <span className={styles.commentBtn}>
                <FaCommentAlt className={styles.commentIcon} /> comment
            </span>
        </div>

        <div className={styles.details}>
            {post && <>
                <span onClick={() => toggleLikesModal(post.id)} className={styles.viewLikesBtn}>{post?.likes.length} likes</span>
                <span onClick={() => toggleCommentsModal(post.id)} className={styles.viewCommentsBtn}>{post?.comments.length} comments</span>
            </>}
        </div>
    </div>
}
