//css, icons
import styles from './profile.module.css';
import { SlUserFollow } from "react-icons/sl";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';
import { FaUserEdit } from "react-icons/fa";
//interfaces
import { IUser, IUserDataLogged, IUserDataNotLogged } from '../../interfaces';
//hooks
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
//services
import { getPostsForUser, getUser } from '../../data/api';
//components
import { PostList } from '../../components/PostList';
import { ConnectionsModal, toggleConnectionsModal } from '../../components/Modals/ConnectionsModal';
import { EditProfileModal, toggleEditProfileModal } from '../../components/Modals/EditProfileModal';
import { ScrollToTop } from '../../components/ScrollToTop';


export const Profile = () => {

    const { id } = useParams();
    const { currentUser, userPostsIDs } = useProfile(id);
    const { userData } = useAuthContext();

    return (
        //scroll to top when component pre-render, init modals on the page
        <div className={styles.wrapper}>
            <ScrollToTop />

            {id && <ConnectionsModal userId={id} />}

            <EditProfileModal currentUser={currentUser}/>

            <div className={styles.container}>

                {!currentUser && <p>Loading...</p>}

                {currentUser && <>
                    <ProfileUpper currentUser={currentUser} />

                    <ProfileLower currentUser={currentUser} userData={userData} />

                    {userPostsIDs && <ProfilePostList currentPosts={userPostsIDs} />}

                    <ProfilePaginationControls />
                </>}
            </div>
        </div>
    )
}

const useProfile = (id: string | undefined) => {
    const [currentUser, setCurrentUser] = useState<IUser>();
    const [userPostsIDs, setUserPostsIDs] = useState<string[]>();
    
    useEffect(() => {
        if(id) {
            getUser(id).then(data => {
                setCurrentUser(data);
            });
        }
    }, [id]);

    useEffect(() =>{
        if(id) {
            getPostsForUser(id).then(data => {
                setUserPostsIDs(data);
            })
        }
    }, [id]);
    return { currentUser, userPostsIDs };
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
        <FaUserEdit className={styles.editIcon} />
    </div>
}

const ProfileLower = (
    { currentUser, userData }:
        { currentUser: IUser, userData: IUserDataLogged | IUserDataNotLogged }
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
        : { currentPosts: string[] }) => {
    return <div className={styles.posts}>
        <PostList postsIDs={currentPosts} />
    </div>
}

const ProfilePaginationControls = () => {
    return <div className={styles.controlsPagination}>
        <button className={styles.btnPagination}><TbPlayerTrackPrevFilled /> {'Prev'}</button>
        <button className={styles.btnPagination}>{'Next'}<TbPlayerTrackNextFilled /></button>
    </div>
}
