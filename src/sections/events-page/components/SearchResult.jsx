import styles from "../styling/SearchResult.module.css";
import eventPicCollection from "./eventPicCollection";
import { Link } from "react-router-dom";

function SearchResult({
  title,
  startDateTime,
  endDateTime,
  location,
  eventID,
}) {
  const destination = "/mainApp/events/viewEvent/" + eventID;
  return (
    <div className={styles.result}>
      <img src={eventPicCollection[(Math.floor(Math.random() * eventPicCollection.length))]} alt="event picture" />
      <div className={styles.resultDetails}>
        <ul>
          <Link className={styles.eventTitle} to={destination}>
            {title}
          </Link>
          <li>
            <b>Start Date: {startDateTime}</b>
          </li>
          <li>
            <b>End Date: {endDateTime}</b>
          </li>
          <li>
            <b>Location: {location}</b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchResult;
