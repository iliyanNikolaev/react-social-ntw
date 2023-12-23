import { BiSolidLike } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { IPost } from '../../interfaces';
import styles from './post-item.module.css';
import { LikesModal } from "../Modals/LikesModal";
import { toggleModal } from "../Modal";

export const PostItem = ({ post } : { post: IPost | undefined }) => {
    return (
        <div className={styles.container}>
            <LikesModal likes={post?.likes} />
            <div className={styles.upper}>
                <img className={styles.avatar} src={post?.owner.profilePic} alt="avatar" />
                <div className={styles.author}>
                    <Link to={`/profile/${post?.owner.id}`} className={styles.fullName}>{post?.owner.firstName} {post?.owner.lastName}</Link>
                    <span className={styles.time}>2 hours ago</span>
                </div>
            </div>
            <div className={styles.lower}>
                <p className={styles.postContent}>{post?.textContent}</p>
                <img className={styles.postImg} src={post?.img} alt="post-image" />
            </div>
            <div className={styles.controls}>

                <div className={styles.actions}>
                    <span className={styles.likeBtn}>
                    <BiSolidLike className={styles.likeIcon} /> like
                    </span>
                    <span className={styles.commentBtn}>
                    <FaCommentAlt className={styles.commentIcon} /> comment
                    </span>
                </div>

                <div className={styles.details}>
                    <span onClick={() => toggleModal('likes-modal')} className={styles.viewLikesBtn}>{post?.likes.length} likes</span>
                    <span className={styles.viewCommentsBtn}>{post?.comments.length} comments</span>
                </div>
            </div>
        </div>
    )
}
