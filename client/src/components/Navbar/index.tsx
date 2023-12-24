// css, icons
import styles from './navbar.module.css';
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoShareSocial } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
//hooks
import { useAuthContext } from '../../contexts/AuthContext';
// components and utils
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const { userData, logoutHandler } = useAuthContext();

    const onLogout = () => logoutHandler();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Logo />

                <NavLinks isAuth={userData.isAuth} onLogout={onLogout} />
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

const NavLinks = ({ isAuth, onLogout }: { isAuth: boolean, onLogout: () => void }) => {
    return <div className={styles.icons}>
        <Link to='/'><FaHome className={styles.homeIcon} /></Link>
        <Link to='/users'><FaUsers className={styles.usersIcon} /></Link>
        {isAuth ? <Link to='/profile/4'><CgProfile className={styles.profileIcon} /></Link> : null}
        {isAuth ? <Link to='#'><MdLogout onClick={onLogout} className={styles.logoutIcon} /></Link> : null}
    </div>;
}
