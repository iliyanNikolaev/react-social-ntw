//css, icons
import styles from './comments-modal.module.css';
import { FaCommentDots } from "react-icons/fa";
//interfaces
//components and utils
import { Modal, toggleModal } from "../../Modal"
import { useState } from 'react';


export const toggleCommentsModal = (id: string) => {
	console.log('toggle-comments-modal'+id)
	toggleModal('comments-modal'+id);
}

export const CommentsModal = (
	{ id }:
	{ id: string }
) => {
	const [comments, setComments] = useState(['hardcoded comment']);

	function addComment(text:string) {
		setComments(prev => [...prev, text]);
	}

	return (
		<Modal label={"comments-modal"+id}>

			<div className={styles.container}>
				{false && <p>No comments yet..</p>}

				<CommentsList comments={comments}/>

				<AddCommentForm addComment={addComment}/>
			</div>

		</Modal>
	)
}

const CommentsList = ({
	comments
}: {
	comments: string[]
}) => {
	return <div className={styles.commentList}>
		{comments.map(() => <Comment />)}
		<p>No comments yet...</p>
	</div>
}

const Comment = () => {
	return <div className={styles.comment}>
		<img className={styles.avatar} src="/user.png" alt="avatar" />
		<div className={styles.commentContent}>
			<span className={styles.author}>John Doe</span>
			<span className={styles.textContent}>Only Hardcoded comments</span>
		</div>
	</div>
}

const AddCommentForm = ({
	addComment
}: {
	addComment: (comment: string) => void
}) => {
	const [commentVal, setCommentVal] = useState<string>('');

	function submitForm(e: React.FormEvent<HTMLFormElement>){
		e.preventDefault();
		if(commentVal != ''){
			addComment(commentVal);
			setCommentVal('');
		}
	}
 	return <form className={styles.addCommentForm} onSubmit={submitForm}>
		<span className={styles.addCommentHeading}>add comment</span>
		
		<div className={styles.inputContainer}>
			<FaCommentDots className={styles.icon} />
			<input className={styles.input} type="text" placeholder='comment' value={commentVal} onChange={(e) => setCommentVal(e.target.value)}/>
		</div>

		<button className={styles.btn}>Add</button>
	</form>
}