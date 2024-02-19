import styles from './users.module.css';

export const Users = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.heading}>all users in social-ntw</h1>
                <input className={styles.input} type="text" placeholder='Search by name...' />
                <button className={styles.btn}>Search</button>

                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />

            </div>
        </div>
    )
}

const UserCard = () => <>
    <div className={styles.userContainer}>
        <img className={styles.avatar} src="/user.png" alt="avatar" />
        <span className={styles.username}>John Doe</span>
    </div>
</>