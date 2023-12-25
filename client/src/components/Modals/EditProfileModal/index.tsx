//css
import { IUser } from '../../../interfaces';
import { Modal, toggleModal } from '../../Modal';
import styles from './edit-profile-modal.module.css';


export const toggleEditProfileModal = () => {
    toggleModal('edit-profile-modal');
}

export const EditProfileModal = (
    { currentUser }:
        {currentUser: IUser | undefined}
) => {
    return (
        <Modal label="edit-profile-modal">

            <div className={styles.container}>
                {currentUser?.firstName} { currentUser?.lastName }
            </div>

        </Modal>
    )
}