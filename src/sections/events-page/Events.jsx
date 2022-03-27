import Axios from "axios";
import { Suspense, lazy, useState, useEffect } from "react";
import styles from "./Events.module.css";
import img from "./styling/placeholder.jpg";

const AddEventWidget = lazy(() => import("./components/AddEventWidget"));
const WidgetSpinner = lazy(() => import("./components/WidgetSpinner"));
const YellowWidget = lazy(() => import("./components/YellowWidget"));
const Search = lazy(() => import("./components/Search"));

function Events() {
  const [isAddEventWidgetShowing, setIsAddEventWidgetShowing] = useState(false);
  const [top10MostRecentEvents, setTop10MostRecentEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      Axios.defaults.withCredentials = true;
      const res = await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS +
          "/eventsSystem/top10MostRecentEvents"
      );
      if (res.data.status === "failure") {
        window.confirm("Something went wrong. Please try again later.");
      }
      setTop10MostRecentEvents(res.data.events);
    };
    fetchEvents();
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.topContent}>
        <h1 className={styles.title}>Events</h1>
        <div className={styles.widgetSpinner}>
          <WidgetSpinner firstThreeEvents={top10MostRecentEvents.slice(3)} />
        </div>
      </div>
      <div className={styles.search}><Search /></div>
      <div className={styles.lowerContent}>
        <div className={styles.eventsList}>
          {top10MostRecentEvents.slice(4).map((event, index) => {
            return (
              <YellowWidget
                eventID={event.eventID}
                eventTitle={event.title}
                eventStartDateTime={event.startDateTime}
                image={img}
                key={index}
              />
            );
          })}
          <YellowWidget/>
          <YellowWidget/>
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
