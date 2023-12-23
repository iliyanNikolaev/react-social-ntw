// css, icons
import styles from './navbar.module.css';
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoShareSocial } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
// components and utils
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Logo />

                <NavLinks />
            </div>
        </div>
    )
}

const Logo = () => {
    return <div className={styles.logoContainer}>
        <IoShareSocial className={styles.logoIcon} />
        <span className={styles.logo}>
            social-ntw
        </span>
    </div>
}

const NavLinks = () => {
    return <div className={styles.icons}>
        <Link to='/'><FaHome className={styles.homeIcon} /></Link>
        <Link to='/users'><FaUsers className={styles.usersIcon} /></Link>
        <Link to='/profile/4'><CgProfile className={styles.profileIcon} /></Link>
    </div>;
}