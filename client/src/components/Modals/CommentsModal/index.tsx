//css
import styles from './comments-modal.module.css';
//interfaces
import { IComment } from '../../../interfaces';
//components and utils
import { Modal, toggleModal } from "../../Modal"


export const toggleCommentsModal = (id: string) => {
	toggleModal('comments-modal'+id);
}

type CommentsModalProp = { comments: IComment[] | undefined, id: string }

export const CommentsModal = (
	{ comments, id }: CommentsModalProp
) => {
	return (
		<Modal label={"comments-modal"+id}>

			<div className={styles.container}>
				{!comments && <p>No comments yet..</p>}

				<CommentsList comments={comments} />
			</div>

		</Modal>
	)
}

const CommentsList = (
	{ comments }: {comments: IComment[] | undefined}
) => {
	return <div className={styles.commentList}>
		{comments?.length == 0 && <p>No comments yet...</p>}
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