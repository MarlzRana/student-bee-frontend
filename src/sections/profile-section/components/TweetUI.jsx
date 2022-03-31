import styles from "../styling/TweetUI.module.css";
import pic from "./DefaultProfilePic.jpg";
import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import Axios from "axios";
import pfpCollection from "./pfpCollection";

function TweetUI() {
  const [enteredTweetContent, setEnteredTweetContent] = useState("");
  const [recentTweets, setRecentTweets] = useState([]);
  const [mostRecentlyAdded, setMostRecentlyAdded] = useState("");

  useEffect(() => {
    Axios.defaults.withCredentials = true;

    const fetchTweets = async () => {
      await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS + "/tweetsSystem/get20RecentTweets"
      )
        .then(function (res) {
          if (res.data.status === "success") {
            setRecentTweets(res.data.tweets);
          }
        })
        .catch(function (error) {
          return;
        });
    };
    fetchTweets();
  }, [mostRecentlyAdded]);

  const addTweet = async (e) => {
    e.preventDefault();

    const payload = {
      tweetPostedDateTime: new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      content: enteredTweetContent,
    };
    try {
      const res = await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS + "/tweetsSystem/addTweet",
        payload
      );
      if (res.data.status === "success") {
        setMostRecentlyAdded(payload);
      }
      if (res.data.status === "failure") {
        window.confirm("Something went wrong. Please try again later.");
      }
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.fieldContainer}>
        <textarea
          className={styles.field}
          placeholder="What are you up to today?"
          onChange={(e) => setEnteredTweetContent(e.target.value)}
        />
        <button className={styles.tweetButton} onClick={(e) => addTweet(e)}>
          Tweet
        </button>
      </form>
      <div className={styles.feed}>
        {/* <Tweet userImage={pfpCollection[(Math.floor(Math.random() * pfpCollection.length))]} username="akmal rizal" post="hello there!"/>
        <Tweet userImage={pfpCollection[(Math.floor(Math.random() * pfpCollection.length))]} username="akmal rizal" post="hello there!"/> */}
        {recentTweets.map((event, index) => {
          return (
            <Tweet
              userImage={pfpCollection[(Math.floor(Math.random() * pfpCollection.length))]}
              username={event.authorUsername}
              time={event.howLongAgo}
              post={event.content}
              tweetID={event.tweetID}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TweetUI;
