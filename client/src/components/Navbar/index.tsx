import styles from './navbar.module.css';

// icons
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoShareSocial } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <IoShareSocial className={styles.logoIcon} />
                    <span className={styles.logo}>
                        social-ntw
                    </span>
                </div>
                <div className={styles.icons}>
                    <Link to='/'><FaHome className={styles.homeIcon} /></Link>
                    <Link to='/users'><FaUsers className={styles.usersIcon} /></Link>
                    <Link to='/profile/1'><CgProfile className={styles.profileIcon} /></Link>
                </div>
            </div>
        </div>
    )
}
