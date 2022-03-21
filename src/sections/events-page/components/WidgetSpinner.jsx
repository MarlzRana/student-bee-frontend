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
      title: "",
      description: "",
    },
    {
      username: "",
      description: "",
    },
    {
      username: "",
      description: "",
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
      console.log(res.data);
      console.log(eventsArray);
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

// eventName="Music Event"
//               description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sgaittis dictum mauris, eget tincidunt nulla dignissim ut. Quisque cursus ante placerat, auctor tellus vitae, accumsan neque. Etiam a tincidunt lorem. Nam magna erat, posuere vitae viverra nec, mollis sit amet libero. as da sda sd ad asd a "
//               image={img}
