//css
import styles from './connentions-modal.module.css';
//components and utils
import { Modal, toggleModal } from "../../Modal"


export const toggleConnectionsModal = () => {
	toggleModal('connections-modal');
}

export const ConnectionsModal = ({ userId }: { userId: string}) => {
	console.log(userId);
	return (
		<Modal label="connections-modal">

			<div className={styles.container}>
				<ConnectionList />
			</div>

		</Modal>
	)
}


const ConnectionList = () => {
	return <>
		<h3>followers</h3>
		<div className={styles.content}>
			<p>No connections yet..</p>
			<Connection />
			<Connection />
			<Connection />
			<Connection />
		</div>
	</>
}


const Connection = () => {
	return <div className={styles.connection}>
		<img className={styles.avatar}
			src="/user.png" alt="avatar" />
		<span className={styles.fullName}>John Doe</span>
	</div>
}