import styles from "../styling/FloatingWidget.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function FloatingWidget({ eventID, eventTitle, eventDescription, image }) {
  const eventLink = "/mainApp/events/viewEvent/" + eventID;
  return (
    <div className={styles.floatingWidget}>
      <img src={image} alt="Event Image" />
      <div className={styles.description}>
        <h1>{eventTitle}</h1>
        <p>{eventDescription}</p>
        <Link className={styles.btn} to={eventLink}>
          Find out more
        </Link>
      </div>
    </div>
  );
}

export default FloatingWidget;
