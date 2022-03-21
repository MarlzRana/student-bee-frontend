import Axios from "axios";
import { Suspense, lazy, useState, useEffect } from "react";
import styles from "./Events.module.css";
import img from "./styling/placeholder.jpg";

const AddEventWidget = lazy(() => import("./components/AddEventWidget"));
const WidgetSpinner = lazy(() => import("./components/WidgetSpinner"));
const YellowWidget = lazy(() => import("./components/YellowWidget"));

function Events() {
  const [isAddEventWidgetShowing, setIsAddEventWidgetShowing] = useState(false);

  Axios.defaults.withCredentials = true;
  const [eventsArray, setEventsArray] = useState([
    {
      eventID: 0,
      username: null,
      startDateTime: null,
    },
  ]);
  const [newEventsArray, setNewEventsArray] = useState([
    {
      eventID: 0,
      title: null,
      startDateTime: null,
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
      setNewEventsArray([
        res.data[3],
        res.data[4],
        res.data[5],
        res.data[6],
        res.data[7],
        res.data[8],
        res.data[9],
      ]);
      if (eventsArray === "") {
        setEventsArray([
          res.data[3],
          res.data[4],
          res.data[5],
          res.data[6],
          res.data[7],
          res.data[8],
          res.data[9],
        ]);
      }
      if (eventsArray !== newEventsArray) {
        setEventsArray([
          res.data[3],
          res.data[4],
          res.data[5],
          res.data[6],
          res.data[7],
          res.data[8],
          res.data[9],
        ]);
      }
    };
    fetchEvents();
  }, [eventsArray]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.topContent}>
        <h1 className={styles.title}>Events</h1>
        <div className={styles.widgetSpinner}>
          <WidgetSpinner />
        </div>
      </div>
      <div className={styles.lowerContent}>
        <div className={styles.eventsList}>
          {eventsArray.map((item) => (
            <YellowWidget
              key={item.eventID}
              eventName={item.title}
              eventDate={item.startDateTime}
              image={img}
            />
          ))}
        </div>
      </div>
      {isAddEventWidgetShowing ? (
        <AddEventWidget
          setIsAddEventWidgetShowing={setIsAddEventWidgetShowing}
        />
      ) : (
        <></>
      )}
      <button
        title="Add an event!"
        onClick={() => setIsAddEventWidgetShowing(true)}
        className={styles.addEvent}
      >
        +
      </button>
    </Suspense>
  );
}

export default Events;
