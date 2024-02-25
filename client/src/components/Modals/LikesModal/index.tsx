//css
import { Modal, toggleModal } from '../../Modal';
import styles from './likes-modal.module.css';

export const toggleLikesModal = (id: string) => {
	console.log('toggle-likes-modal'+id);
	toggleModal('likes-modal'+id);
}

export const LikesModal = (
	{ id }: 
		{id: string}
	) => {

	return (
		<Modal label={"likes-modal" + id}>
			<div className={styles.container}>
				<LikeList />
			</div>
		</Modal>
	)
}

const LikeList = () => {
	return <>
		<h3>likes</h3>
		<div className={styles.content}>
			<Like/>
			<Like/>
			<Like/>
			<Like/>
			<p>No likes yet..</p>
		</div>
	</>
}

const Like = () => {
	return <div className={styles.like}>
		<img className={styles.avatar}
			src="/user.png" alt="avatar" />
		<span className={styles.fullName}>John Doe</span>
	</div>
}