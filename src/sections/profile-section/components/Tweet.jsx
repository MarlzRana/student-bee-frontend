import styles from "../styling/Tweet.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Tweet(props) {
  const { userImage, username, time, post, tweetID } = props;
  const destination = "/mainApp/userProfile/" + username;
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState("");
  const [lastAction, setLastAction] = useState("");
  const [likeID, setLikeID] = useState("");
  // const [ likeCounter, setLikeCounter ] = useState(0);

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    const payload = {
      tweetID: tweetID,
    };
    const fetchLikes = async () => {
      await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/tweetsSystem/getLikeCount",
        payload
      )
        .then(function (res) {
          // console.log(res);
          if (res.data.status === "success") {
            setLikeCount(res.data.likeCount);
            console.log("Likes: " + res.data.likeCount);
          }
        })
        .catch(function (error) {
          return;
        });
    };
    fetchLikes();

    const isLikedByUser = async () => {
      await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/tweetsSystem/doesUserLikeTweet",
        payload
      )
        .then(function (res) {
          // console.log(res);
          if (res.data.liked) {
            setIsLiked(true);
            setLikeID(res.data.likeID);
          } else {
            setIsLiked(false);
          }
        })
        .catch(function (error) {
          return;
        });
    };
    isLikedByUser();
  }, [lastAction]);

  const likeTweet = async (e) => {
    e.preventDefault();
    if (isLiked) {
      try {
        const payload = {
          likeID: likeID,
        };
        console.log("Unlike payload: ");
        console.log(payload);
        const res = await Axios.post(
          process.env.REACT_APP_APIHOSTADDRESS + "/tweetsSystem/unlikeTweet",
          payload
        );
        if (res.data.status === "success") {
          setIsLiked(false);
          setLastAction("unliked");
          console.log(res);
          console.log("success");
        }
        if (res.data.status === "failure") {
          console.log(res);
          window.confirm("Something went wrong. Please try again later.");
          console.log("failure");
        }
      } catch (error) {
        console.log(error);
        window.confirm("Something went wrong. Please try again later.");
      }
    } else {
      try {
        const payload = {
          tweetID: tweetID,
        };
        console.log("Like payload: ");
        console.log(payload);
        const res = await Axios.post(
          process.env.REACT_APP_APIHOSTADDRESS + "/tweetsSystem/likeTweet",
          payload
        );
        if (res.data.status === "success") {
          setIsLiked(true);
          setLastAction("liked");
          console.log(res);
          console.log("success");
          setLikeID(res.data.likeID);
        }
        if (res.data.status === "failure") {
          console.log(res);
          window.confirm("Something went wrong. Please try again later.");
          console.log("failure");
        }
      } catch (error) {
        console.log(error);
        window.confirm("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className={styles.tweet}>
      <img 
        src={userImage} 
        alt="Profile Pic" 
      />
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
          <div className={styles.likeCounter}>{likeCount}</div>
          <button className={styles.likeButton} onClick={(e) => likeTweet(e)}>
            {!isLiked ? (
              <i className={styles.notLikedIcon}></i>
            ) : (
              <i className={styles.likedIcon}></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
