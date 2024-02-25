//css
import styles from './edit-profile-modal.module.css';
//components
import { AddPhoto } from '../../AddPhoto';
import { Modal, toggleModal } from '../../Modal';


export const toggleEditProfileModal = () => {
    console.log('toggle-edit-profile-modal');
    toggleModal('edit-profile-modal');
}

export const EditProfileModal = () => {
    return (
        <Modal label="edit-profile-modal">
            <div className={styles.container}>
                <h3 className={styles.heading}>edit profile</h3>
                <EditProfileForm />
            </div>
        </Modal>
    )
}

const EditProfileForm = () => {
    
    return <form className={styles.loginForm}>

        <div className={styles.inputContainer}>
            <input className={styles.input} type="text" placeholder='first name' />
        </div>

        <div className={styles.inputContainer}>
            <input className={styles.input} type="text" placeholder='last name' />
        </div>

        <div className={styles.inputContainer}>
            <input className={styles.input} type="email" placeholder='email' />
        </div>

        <AddPhoto type='profile' />

        <AddPhoto type='cover' />

        <button className={styles.btn}>save</button>
    </form>
}