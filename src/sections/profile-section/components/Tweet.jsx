import styles from '../styling/Tweet.module.css';
import { Link } from 'react-router-dom';

function Tweet(props) {
    const { userImage, name, time, post } = props;
    return (
        <div className={styles.tweet}>
            <img src={userImage} alt="Profile Pic" />
            <div className={styles.userTweet}>
                <div className={styles.tweetHeader}>
                    <h2>
                        <Link className={styles.profileRedirect} to="/mainApp/userProfile">{name}</Link>   
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