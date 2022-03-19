import styles from "../styling/FloatingWidget.module.css";
import { Link } from "react-router-dom";

function FloatingWidget(props) {
  const { eventName, description, image } = props;
  return (
    <div class={styles.floatingWidget}>
      <img src={image} alt="Event Image" />
      <div class={styles.description}>
        <h1>{eventName}</h1>
        <p>{description}</p>
        <Link className={styles.btn} to="/mainApp/eventDetails">
          Find out more
        </Link>
      </div>
    </div>
  );
}

export default FloatingWidget;
