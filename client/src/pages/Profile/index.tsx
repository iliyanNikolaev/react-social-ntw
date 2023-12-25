//css, icons
import styles from './profile.module.css';
import { SlUserFollow } from "react-icons/sl";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';
import { FaEdit } from "react-icons/fa";
//interfaces
import { IPost, IUser } from '../../interfaces';
//hooks
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserDataType, useAuthContext } from '../../contexts/AuthContext';
//services
import { getUser } from '../../data/api';
//components
import { PostList } from '../../components/PostList';
import { ConnectionsModal, toggleConnectionsModal } from '../../components/Modals/ConnectionsModal';
import { EditProfileModal, toggleEditProfileModal } from '../../components/Modals/EditProfileModal';
import { ScrollToTop } from '../../components/ScrollToTop';


export const Profile = () => {

    const { id } = useParams();
    const { currentUser } = useProfile(id);
    const { userData } = useAuthContext();

    return (
        //scroll to top when component pre-render, init modals on the page
        <div className={styles.wrapper}>
            <ScrollToTop />

            <ConnectionsModal connections={currentUser?.connections} />

            <EditProfileModal currentUser={currentUser}/>

            <div className={styles.container}>

                {!currentUser && <p>Loading...</p>}

                {currentUser && <>
                    <ProfileUpper currentUser={currentUser} />

                    <ProfileLower currentUser={currentUser} userData={userData} />

                    <ProfilePostList currentPosts={currentUser.posts} />

                    <ProfilePaginationControls />
                </>}
            </div>
        </div>
    )
}

const useProfile = (id: string | undefined) => {
    const [currentUser, setCurrentUser] = useState<IUser | undefined>();

    useEffect(() => {
        const user = getUser(id);
        setCurrentUser(user);
    }, [id]);

    return { currentUser };
}

const ProfileUpper = (
    { currentUser }:
        { currentUser: IUser}
) => {
    return <div className={styles.upper}>

        <EditProfileIcon />
        
        <img className={styles.cover} src={currentUser.coverPic} alt="cover" />
        <img className={styles.avatar} src={currentUser.profilePic} alt="avatar" />

        <span className={styles.fullName}>{currentUser.firstName} {currentUser.lastName}</span>
    </div>
}

const EditProfileIcon = () => {
    return <div className={styles.editIconContainer} onClick={toggleEditProfileModal}>
        <FaEdit className={styles.editIcon} />
    </div>
}

const ProfileLower = (
    { currentUser, userData }:
        { currentUser: IUser, userData: UserDataType }
) => {
    return <div className={styles.lower}>
        <div className={styles.controls}>
            <span
                onClick={toggleConnectionsModal}
                className={styles.connectionsBtn}
            >
                {currentUser.connections.length} followers
            </span>
            {userData.isAuth && <button className={styles.btn}><SlUserFollow /> follow</button>}

        </div>
    </div>
}

const ProfilePostList = (
    { currentPosts }
        : { currentPosts: IPost[] | undefined }) => {
    return <div className={styles.posts}>
        <PostList posts={currentPosts} />
    </div>
}

const ProfilePaginationControls = () => {
    return <div className={styles.controlsPagination}>
        <button className={styles.btnPagination}><TbPlayerTrackPrevFilled /> {'Prev'}</button>
        <button className={styles.btnPagination}>{'Next'}<TbPlayerTrackNextFilled /></button>
    </div>
}
