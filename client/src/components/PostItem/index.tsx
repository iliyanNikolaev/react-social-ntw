import styles from './post-item.module.css';

export const PostItem = () => {
    return (
        <div className={styles.container}>

            <div className={styles.upper}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/121745595?v=4" alt="avatar" />
                <div className={styles.author}>
                    <span className={styles.fullName}>Iliyan Nikolaev</span>
                    <span className={styles.time}>2 hours ago</span>
                </div>
            </div>
            <div className={styles.lower}>
                <p className={styles.postContent}>React is powerfull library for building UI</p>
                <img className={styles.postImg} src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="post-image" />
            </div>
            <div className={styles.controls}>

                <div className={styles.actions}>
                    <button>
                        like
                    </button>
                    <button>
                        comment
                    </button>
                </div>

                <div className={styles.details}>
                    <span>12 likes</span>
                    <span>6 comments</span>
                </div>
            </div>
        </div>
    )
}
