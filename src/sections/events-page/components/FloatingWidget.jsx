import styles from '../styling/FloatingWidget.module.css';
import { Link } from 'react-router-dom';

function FloatingWidget({ eventID, eventTitle, eventDescription, image }) {
  return (
    <div className={styles.floatingWidget}>
      <img src={image} alt='Event Image' />
      <div className={styles.description}>
        <h1>{eventTitle}</h1>
        <p>{eventDescription}</p>
        <Link className={styles.btn} to='/mainApp/eventDetails'>
          Find out more
        </Link>
      </div>
    </div>
  );
}

export default FloatingWidget;
