import styles from "../styling/WidgetSpinner.module.css";
import img from "../styling/placeholder.jpg";
import FloatingWidget from "./FloatingWidget";
import Axios from "axios";
import React, { useState, useEffect } from "react";

function WidgetSpinner() {
  Axios.defaults.withCredentials = true;
  const [eventsArray, setEventsArray] = useState([
    {
      username: null,
      description: null,
    },
    {
      username: null,
      description: null,
    },
    {
      username: null,
      description: null,
    },
  ]);
  const [newEventsArray, setNewEventsArray] = useState([
    {
      title: null,
      description: null,
    },
    {
      username: null,
      description: null,
    },
    {
      username: null,
      description: null,
    },
  ]);
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/eventsSystem/top10MostRecentEvents"
      );
      if (res.data.status === "failure") {
        window.confirm("Something went wrong. Please try again later.");
      }
      setNewEventsArray(res.data);
      if (eventsArray === "") {
        setEventsArray(res.data);
      }
      if (eventsArray !== newEventsArray) {
        setEventsArray(res.data);
      }
    };
    fetchEvents();
  }, [eventsArray]);

  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <span className={styles.first}>
          <div className="eventWidget">
            <FloatingWidget
              eventName={eventsArray[0].title}
              description={eventsArray[0].description}
              image={img}
            />
          </div>
        </span>
        <span className={styles.second}>
          <div className="eventWidget">
            <FloatingWidget
              eventName={eventsArray[1].title}
              description={eventsArray[1].description}
              image={img}
            />
          </div>
        </span>
        <span className={styles.third}>
          <div className="eventWidget">
            <FloatingWidget
              eventName={eventsArray[2].title}
              description={eventsArray[2].description}
              image={img}
            />
          </div>
        </span>
      </div>
    </div>
  );
}

export default WidgetSpinner;
