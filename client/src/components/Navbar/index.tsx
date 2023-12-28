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
import { IUserData } from '../../interfaces';

export const Navbar = () => {
    const { userData, logoutHandler } = useAuthContext();

    const onLogout = () => logoutHandler();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Logo />

                <NavLinks userData={userData} onLogout={onLogout} />
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

const NavLinks = ({ userData, onLogout }: { userData: IUserData, onLogout: () => void }) => {
    return <div className={styles.icons}>
        <Link to='/'><FaHome className={styles.homeIcon} /></Link>
        <Link to='/users'><FaUsers className={styles.usersIcon} /></Link>
        {userData.isAuth ? <Link to={`/profile/${userData.id}`}><CgProfile className={styles.profileIcon} /></Link> : null}
        {userData.isAuth ? <Link to='#'><MdLogout onClick={onLogout} className={styles.logoutIcon} /></Link> : null}
    </div>;
}
