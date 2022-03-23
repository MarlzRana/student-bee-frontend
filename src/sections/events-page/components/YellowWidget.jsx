import styles from '../styling/YellowWidget.module.css';
import { Link } from 'react-router-dom';

function YellowWidget({ eventTitle, eventStartDateTime, image }) {
  const eventStartDateTimeString = new Date(eventStartDateTime).toLocaleString(
    'en-us',
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  );
  return (
    <div className={styles.yellowWidget}>
      <Link to='/mainApp/eventDetails'>
        <img src={image} alt='Event Image' />
        <div className={styles.description}>
          <h1>{eventTitle}</h1>
          <p>{eventStartDateTimeString}</p>
        </div>
      </Link>
    </div>
  );
}

export default YellowWidget;
