//css
import styles from './edit-profile-modal.module.css';
//interfaces
import { IUser } from '../../../interfaces';
//components
import { AddPhoto } from '../../AddPhoto';
import { Modal, toggleModal } from '../../Modal';


export const toggleEditProfileModal = () => {
    toggleModal('edit-profile-modal');
}

export const EditProfileModal = (
    { currentUser }:
        { currentUser: IUser | undefined }
) => {
    return (
        <Modal label="edit-profile-modal">
            <div className={styles.container}>
                <h3 className={styles.heading}>edit profile</h3>
                <EditProfileForm currentUser={currentUser}/>
            </div>
        </Modal>
    )
}

const EditProfileForm = ({ currentUser }: { currentUser: IUser | undefined}) => {
    
    return <form className={styles.loginForm}>

        <div className={styles.inputContainer}>
            {/* <MdAlternateEmail className={styles.icon} /> */}
            <input className={styles.input} type="text" placeholder='first name' />
        </div>

        <div className={styles.inputContainer}>
            {/* <MdAlternateEmail className={styles.icon} /> */}
            <input className={styles.input} type="text" placeholder='last name' />
        </div>

        <div className={styles.inputContainer}>
            {/* <RiLockPasswordLine className={styles.icon} /> */}
            <input className={styles.input} type="email" placeholder='email' />
        </div>

        <AddPhoto type='profile' />

        <AddPhoto type='cover' />

        <button className={styles.btn}>save</button>
    </form>
}