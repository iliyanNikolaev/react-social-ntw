import styles from './profile.module.css';
import { SlUserFollow } from "react-icons/sl";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';

import { IPost, IUser } from '../../interfaces';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUser, getPosts } from '../../data/service';

import { PostList } from '../../components/PostList';
import { ConnectionsModal, toggleConnectionsModal } from '../../components/Modals/ConnectionsModal';
import { ScrollToTop } from '../../components/ScrollToTop';


export const Profile = () => {
    
    const { id } = useParams();
    const { currentUser, currentPosts } = useProfile(id);

    return (
        <div className={styles.wrapper}>

            {/* scroll to top when component rerender and init modals for the page */}
            <ScrollToTop />
            <ConnectionsModal connections={currentUser?.connections} />

            <div className={styles.container}>

                {!currentUser && <p>Loading...</p>}

                {currentUser && <>
                    <ProfileUpper currentUser={currentUser} />

                    <ProfileLower currentUser={currentUser} />

                    <ProfilePostList currentPosts={currentPosts} />

                    <ProfilePaginationControls />
                </>}
            </div>
        </div>
    )
}

const useProfile = (id: string | undefined) => {
    const [currentUser, setCurrentUser] = useState<IUser | undefined>();
    const [currentPosts, setCurrentPosts] = useState<IPost[] | undefined>();

    useEffect(() => {
        const user = getUser(id);
        setCurrentUser(user);
        const posts = getPosts();
        setCurrentPosts(posts);
    }, [id]);

    return { currentUser, currentPosts };
}

const ProfileUpper = (
    { currentUser }:
        { currentUser: IUser }
) => {
    return <div className={styles.upper}>
        <img className={styles.cover} src={currentUser.coverPic} alt="cover" />
        <img className={styles.avatar} src={currentUser.profilePic} alt="avatar" />

        <span className={styles.fullName}>{currentUser.firstName} {currentUser.lastName}</span>
    </div>
}

const ProfileLower = (
    { currentUser }:
        { currentUser: IUser }
) => {
    return <div className={styles.lower}>
        <div className={styles.controls}>
            <span
                onClick={toggleConnectionsModal}
                className={styles.connectionsBtn}
            >
                {currentUser.connections.length} connections
            </span>
            <button className={styles.btn}><SlUserFollow /> connect</button>
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
