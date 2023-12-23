//css
import styles from './comments-modal.module.css';
//interfaces
import { IComment } from '../../../interfaces';
//components and utils
import { Modal, toggleModal } from "../../Modal"


export const toggleCommentsModal = () => {
	toggleModal('comments-modal');
}

type CommentsModalProp = { comments: IComment[] | undefined }

export const CommentsModal = (
	{ comments }: CommentsModalProp
) => {
	return (
		<Modal label="comments-modal">

			<div className={styles.container}>
				{!comments && <p>No comments yet..</p>}

				<CommentsList comments={comments} />
			</div>

		</Modal>
	)
}

const CommentsList = (
	{ comments }: CommentsModalProp
) => {
	return <div className={styles.commentList}>
		{comments?.map(x =>
			<Comment key={x.id} comment={x} />
		)}
	</div>
}

type CommentProp = { comment: IComment };

const Comment = (
	{ comment }: CommentProp
) => {
	return <div className={styles.comment}>
		<img className={styles.avatar} src={comment.owner.profilePic} alt="avatar" />
		<div className={styles.commentContent}>
			<span className={styles.author}>{comment.owner.firstName} {comment.owner.lastName}</span>
			<span className={styles.textContent}>{comment.textContent}</span>
		</div>
	</div>
}