import styles from '../styling/Tweet.module.css';

function Tweet(props) {
    const { userImage, name, time, post } = props;
    return (
        <div className={styles.tweet}>
            <img src={userImage} alt="Profile Pic" />
            <div className={styles.userTweet}>
                <div className={styles.tweetHeader}>
                    <h2>
                        <a href="user">{name}</a>   
                    </h2>
                    <div className={styles.publishTime}>
                        {time}
                    </div>
                </div>    
                <div className={styles.tweetContent}>
                    {post}
                </div>
            </div>
        </div> 
    )
}

export default Tweet