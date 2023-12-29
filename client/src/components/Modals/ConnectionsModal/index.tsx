//css
import styles from './connentions-modal.module.css';
//interfaces
import { IUserLean } from '../../../interfaces';
//components and utils
import { Modal, toggleModal } from "../../Modal"
import { useEffect, useState } from 'react';
import { getUserConnections } from '../../../data/api';


export const toggleConnectionsModal = () => {
	toggleModal('connections-modal');
}

export const ConnectionsModal = (
	{ userId }: { userId: string }
) => {

	const [connections, setConnections] = useState<IUserLean[]>();

	useEffect(() => {
		getUserConnections(userId).then(data => {
			setConnections(data);
		}); 
	}, [userId]);

	return (
		<Modal label="connections-modal">

			<div className={styles.container}>
				<ConnectionList connections={connections} />
			</div>

		</Modal>
	)
}

type ConnectionListProp = { connections: IUserLean[] | undefined };

const ConnectionList = (
	{ connections }: ConnectionListProp
) => {
	return <>
		<h3>followers</h3>
		<div className={styles.content}>
			{connections?.length == 0 && <p>No connections yet..</p>}
			{connections?.map(x => <Connection key={x.id} user={x} />)}
		</div>
	</>
}

type ConnectionProp = { user: IUserLean };

const Connection = (
	{ user }: ConnectionProp
) => {
	return <div className={styles.connection}>
		<img className={styles.avatar}
			src={user.profilePic} alt="avatar" />
		<span className={styles.fullName}>{user.firstName} {user.lastName}</span>
	</div>
}