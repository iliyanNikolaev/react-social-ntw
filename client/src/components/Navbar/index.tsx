import styles from './navbar.module.css';

// icons
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoShareSocial } from "react-icons/io5";

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
                    <FaHome className={styles.homeIcon} />
                    <CgProfile className={styles.profileIcon} />
                </div>
            </div>
        </div>
    )
}
