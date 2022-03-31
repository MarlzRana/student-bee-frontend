import styles from "./Profile.module.css";
import { Suspense, lazy, useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const TweetUI = lazy(() => import("./components/TweetUI"));
const Reminder = lazy(() => import("./components/Reminder"));
const LeftPanel = lazy(() => import("./components/LeftPanel"));
const NotificationPanel = lazy(() => import("./components/NotificationPanel"));

function Home() {
  const [username, setUsername] = useState("");
  const [userInformation, setUserInformation] = useState("");
  const [recentTweets, setRecentTweets] = useState([]);
  const routerNavigator = useNavigate();

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    const fetchUserDetails = async () => {
      const payload = {
        username: username,
      };

      await Axios.post(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/loginSystem/getPersonalInformation",
        payload
      )
        .then(function (res) {
          if (res.data.status === "failure") {
            if (res.data.reason === "notLoggedIn") {
              routerNavigator("/loginSystem/login");
            }
            if (
              res.data.reason === "This username does not exist" ||
              res.data.reason === "Invalid username format"
            ) {
              routerNavigator("/mainApp/home");
            }
          } else if (res.data.status === "success") {
            setUserInformation(res.data.userInformation);
          }
        })
        .catch(function (error) {
          return;
        });
    };
    fetchUserDetails();
  }, [username]);

  Axios.defaults.withCredentials = true;
  const fetchUsername = async () => {
    await Axios.get(
      process.env.REACT_APP_APIHOSTADDRESS + "/loginSystem/getCurrentUsername"
    )
      .then(function (res) {
        if (res.data.status === "failure") {
          if (res.data.reason === "notLoggedIn") {
            routerNavigator("/loginSystem/login");
          }
        } else if (res.data.status === "success") {
          setUsername(res.data.username);
        }
      })
      .catch(function (error) {
        return;
      });
  };
  fetchUsername();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.home}>
        <div className={styles.left}>
          <LeftPanel
            firstName={userInformation.firstName}
            lastName={userInformation.lastName}
            courseName={userInformation.courseName}
          />
        </div>
        <div className={styles.middle}>
          <div className={styles.middleCoverPic}>
            <div className={styles.coverText}>
              <h2>Post</h2>
              <p>Express your thoughts.</p>
            </div>
          </div>
          <TweetUI tweetArray={recentTweets} />
        </div>
        {/* <div className={styles.right}>
          <NotificationPanel />
        </div> */}
      </div>
    </Suspense>
  );
}

export default Home;
