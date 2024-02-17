//css, icons
import styles from './comments-modal.module.css';
import { FaCommentDots } from "react-icons/fa";
//interfaces
//components and utils
import { Modal, toggleModal } from "../../Modal"


export const toggleCommentsModal = (id: string) => {
	toggleModal('comments-modal'+id);
}

export const CommentsModal = (
	{ id }:
	{ id: string }
) => {

	return (
		<Modal label={"comments-modal"+id}>

			<div className={styles.container}>
				{false && <p>No comments yet..</p>}

				<CommentsList />

				<AddCommentForm />
			</div>

		</Modal>
	)
}

const CommentsList = () => {
	return <div className={styles.commentList}>
		<Comment />
		<Comment />
		<Comment />
		<Comment />
		<p>No comments yet...</p>
	</div>
}

const Comment = () => {
	return <div className={styles.comment}>
		<img className={styles.avatar} src="/user.png" alt="avatar" />
		<div className={styles.commentContent}>
			<span className={styles.author}>John Doe</span>
			<span className={styles.textContent}>Hardcoded comment</span>
		</div>
	</div>
}

const AddCommentForm = () => {
	return <form className={styles.addCommentForm}>
		<span className={styles.addCommentHeading}>add comment</span>
		
		<div className={styles.inputContainer}>
			<FaCommentDots className={styles.icon} />
			<input className={styles.input} type="text" placeholder='comment' />
		</div>

		<button className={styles.btn}>Add</button>
	</form>
}