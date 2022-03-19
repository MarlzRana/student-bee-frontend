import styles from '../styling/YellowWidget.module.css';
import { Link } from 'react-router-dom';

function YellowWidget(props) {
  const { eventName, eventDate, image } = props;
  return (
    <div className={styles.yellowWidget}>
      <Link to='/mainApp/eventDetails'>
        <img src={image} alt='Event Image' />
        <div className={styles.description}>
          <h1>{eventName}</h1>
          <p>{eventDate}</p>
        </div>
      </Link>
    </div>
  );
}

export default YellowWidget;
