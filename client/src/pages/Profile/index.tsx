//css, icons
import styles from './profile.module.css';
import { SlUserFollow } from "react-icons/sl";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';
import { FaUserEdit } from "react-icons/fa";
//hooks
import { useParams } from 'react-router-dom';
//components
import { PostList } from '../../components/PostList';
import { ConnectionsModal, toggleConnectionsModal } from '../../components/Modals/ConnectionsModal';
import { EditProfileModal, toggleEditProfileModal } from '../../components/Modals/EditProfileModal';
import { ScrollToTop } from '../../components/ScrollToTop';
import { useAuthContext } from '../../contexts/AuthContext';


export const Profile = () => {
    const { id } = useParams();

    return (
        //scroll to top when component pre-render, init modals on the page
        <div className={styles.wrapper}>
            <ScrollToTop />

            {id && <ConnectionsModal userId={id} />}

            <EditProfileModal />

            <div className={styles.container}>

                {false && <p>Loading...</p>}

                    <ProfileUpper  />

                    <ProfileLower  />

                    <ProfilePostList />

                    <ProfilePaginationControls />
            </div>
        </div>
    )
}


const ProfileUpper = () => {
    return <div className={styles.upper}>

        <EditProfileIcon />
        
        <img className={styles.cover} src="/cover.jpg" alt="cover" />
        <img className={styles.avatar} src="/ilich.jpg" alt="avatar" />

        <span className={styles.fullName}>John Doe</span>
    </div>
}

const EditProfileIcon = () => {
    return <div className={styles.editIconContainer} onClick={toggleEditProfileModal}>
        <FaUserEdit className={styles.editIcon} />
    </div>
}

const ProfileLower = () => {
    const { userData } = useAuthContext();

    return <div className={styles.lower}>
        <div className={styles.controls}>
            <span
                onClick={toggleConnectionsModal}
                className={styles.connectionsBtn}
            >
                12 followers
            </span>
            {userData.isAuth && <button className={styles.btn}><SlUserFollow /> follow</button>}

        </div>
    </div>
}

const ProfilePostList = () => {
    return <div className={styles.posts}>
        <PostList  />
    </div>
}

const ProfilePaginationControls = () => {
    return <div className={styles.controlsPagination}>
        <button className={styles.btnPagination}><TbPlayerTrackPrevFilled /> {'Prev'}</button>
        <button className={styles.btnPagination}>{'Next'}<TbPlayerTrackNextFilled /></button>
    </div>
}
