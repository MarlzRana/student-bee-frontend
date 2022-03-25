import styles from "../styling/YellowWidget.module.css";
import { Link } from "react-router-dom";

function YellowWidget({ eventID, eventTitle, eventStartDateTime, image }) {
  const eventStartDateTimeString = new Date(eventStartDateTime).toLocaleString(
    "en-us",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );
  const eventLink = "/mainApp/events/viewEvent/" + eventID;
  return (
    <div className={styles.yellowWidget}>
      <Link to={eventLink}>
        <img src={image} alt="Event Image" />
        <div className={styles.description}>
          <h1>{eventTitle}</h1>
          <p>{eventStartDateTimeString}</p>
        </div>
      </Link>
    </div>
  );
}

export default YellowWidget;
