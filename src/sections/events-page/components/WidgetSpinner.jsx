import styles from "../styling/WidgetSpinner.module.css";
import img from "../styling/placeholder.jpg";
import FloatingWidget from "./FloatingWidget";
import Axios from "axios";
import React, { useState, useEffect } from "react";

function WidgetSpinner() {
  Axios.defaults.withCredentials = true;
  const [eventOne, setEventOne] = useState("");
  const [eventTwo, setEventTwo] = useState("");
  const [eventThree, setEventThree] = useState("");
  const [eventsArray, setEventsArray] = useState("");
  useEffect(() => {
    // async function fetchData() {
    //   const lol = await Axios.get(
    //     process.env.REACT_APP_APIHOSTADDRESS +
    //       '/eventsSystem/top10MostRecentEvents'
    //   );
    //   return lol;
    // }
    const fetchEvents = async () => {
      const res = await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/eventsSystem/top10MostRecentEvents"
      );
      if (res.data.status === "failure") {
        window.confirm("Something went wrong. Please try again later.");
      }
      setEventOne(res.data[0]);
      // console.log(res.data[0]);
      setEventTwo(res.data[1]);
      // console.log(res.data[1]);
      setEventThree(res.data[2]);
      // console.log(res.data[2]);
      setEventsArray(res.data);
      console.log(res.data);
      console.log(eventsArray);
    };
    fetchEvents();
    // console.log(res);
    console.log(eventsArray);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <span className={styles.first}>
          <div className="eventWidget">
            <FloatingWidget
              eventName={eventOne.title}
              description={eventOne.description}
              image={img}
            />
          </div>
        </span>
        <span className={styles.second}>
          <div className="eventWidget">
            <FloatingWidget
              eventName={eventTwo.title}
              description={eventTwo.description}
              image={img}
            />
          </div>
        </span>
        <span className={styles.third}>
          <div className="eventWidget">
            <FloatingWidget
              eventName={eventThree.title}
              description={eventThree.description}
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
