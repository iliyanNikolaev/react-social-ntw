//css
import styles from './likes-modal.module.css';
//interfaces
import { IUserLean } from "../../../interfaces";
//components and utils
import { Modal, toggleModal } from "../../Modal"

type LikesModalPropsType = { likes: IUserLean[] | undefined, id: string }

export const toggleLikesModal = (id: string) => {
	toggleModal('likes-modal'+id);
}

export const LikesModal = (
	{ likes, id }: LikesModalPropsType
) => {
	return (
		<Modal label={"likes-modal"+id}>
			<div className={styles.container}>
				<LikeList likes={likes} />
			</div>
		</Modal>
	)
}

const LikeList = (
	{ likes }: { likes: IUserLean[] | undefined }
) => {
	return <>
		<h3>likes</h3>
		<div className={styles.content}>
			{likes?.length == 0 && <p>No likes yet..</p>}
			{likes?.map(x => <Like key={x.id} user={x} />)}
		</div>
	</>
}

type LikeProp = { user: IUserLean };

const Like = (
	{ user }: LikeProp
) => {
	return <div className={styles.like}>
		<img className={styles.avatar}
			src={user.profilePic} alt="avatar" />
		<span className={styles.fullName}>{user.firstName} {user.lastName}</span>
	</div>
}