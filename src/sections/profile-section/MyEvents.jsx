import styles from "./MySections.module.css";
import { Suspense, lazy, useState, useEffect } from "react";
import pic from "./components/DefaultProfilePic.jpg";
import placeholder from "../events-page/styling/bg.jpg";
import Axios from "axios";

const Content = lazy(() => import("./components/Content"));

function MyEvents() {
  const [myRelevantEvents, setMyRelevantEvents] = useState([]);
  useEffect(() => {
    try {
      const fetchEvents = async () => {
        Axios.defaults.withCredentials = true;
        const res = await Axios.get(
          process.env.REACT_APP_APIHOSTADDRESS + "/eventsSystem/myEvents"
        );
        if (res.data.status === "failure") {
          window.confirm("Something went wrong. Please try again later.");
        }
        setMyRelevantEvents(res.data.events);
      };
      fetchEvents();
    } catch (error) {
      window.confirm("Something went wrong. Please try again later.");
    }
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.mySectionPage}>
        <div className={styles.myHeader}>
          <img src={pic} alt="" />
          <h1>Akmal Rizal</h1>
        </div>
        <h2>My Events</h2>
        <div className={styles.myContainer}>
          {myRelevantEvents.map((event, index) => {
            return (
              <Content
                contentType="event"
                contentBg={placeholder}
                contentID={event.eventID}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </Suspense>
  );
}

export default MyEvents;
