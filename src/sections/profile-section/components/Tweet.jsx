import styles from "../styling/Tweet.module.css";
import { useState } from "react"; 
import { Link } from "react-router-dom";

function Tweet(props) {
  const { userImage, username, time, post } = props;
  const destination = "/mainApp/userProfile/" + username;
  const [ isLiked, setIsLiked ] = useState(false);
  // const [ likeCounter, setLikeCounter ] = useState(0);
  return (
    <div className={styles.tweet}>
      <img src={userImage} alt="Profile Pic" />
      <div className={styles.userTweet}>
        <div className={styles.tweetHeader}>
          <h2>
            <Link className={styles.profileRedirect} to={destination}>
              {username}
            </Link>
          </h2>
          <div className={styles.publishTime}>{time}</div>
        </div>
        <div className={styles.tweetContent}>{post}</div>
        <div className={styles.likeContainer}> 
          <div className={styles.likeCounter}>
            {/* Like Counter */}
            99999999
          </div>
          <button
            className={styles.likeButton}
            onClick={e => {isLiked ? setIsLiked(false) : setIsLiked(true)}}
          >
            {!isLiked ? 
              (<i className={styles.notLikedIcon}></i>) : 
              (<i className={styles.likedIcon}></i>)
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
