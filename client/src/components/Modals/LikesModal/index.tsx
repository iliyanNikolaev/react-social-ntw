//css
import styles from './likes-modal.module.css';
//interfaces
import { ILike, IUserLean } from "../../../interfaces";
//components and utils
import { Modal, toggleModal } from "../../Modal"
import { useEffect, useState } from 'react';
import { getLikesForPost } from '../../../data/api';


export const toggleLikesModal = (id: string) => {
	toggleModal('likes-modal' + id);
}

export const LikesModal = (
	{ id }:
		{ id: string }
) => {
	const [currentLikes, setCurrentLikes] = useState<ILike[]>();

	useEffect(() => {
		getLikesForPost(id).then(data => {
			setCurrentLikes(data);
		});
	}, []);

	return (
		<Modal label={"likes-modal" + id}>
			<div className={styles.container}>
				<LikeList likes={currentLikes} />
			</div>
		</Modal>
	)
}

const LikeList = (
	{ likes }: { likes: ILike[] | undefined }
) => {
	return <>
		<h3>likes</h3>
		
		{likes && <>
			<div className={styles.content}>
				{likes?.length == 0 && <p>No likes yet..</p>}

				{likes?.map(x => <Like key={x.id} user={x.owner} />)}
			</div>
		</>}
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