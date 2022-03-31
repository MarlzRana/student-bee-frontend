import styles from '../styling/WidgetSpinner.module.css';
import FloatingWidget from './FloatingWidget';
import eventPicCollection from './eventPicCollection';

function WidgetSpinner({ firstThreeEvents }) {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        {firstThreeEvents.map((event, index) => {
          const indexToText =
            index === 0 ? 'first' : index === 1 ? 'second' : 'third';
          return (
            <span className={styles[indexToText]} key={index}>
              <div>
                <FloatingWidget
                  eventID={event.eventID}
                  eventTitle={event.title}
                  eventDescription={event.description}
                  image={eventPicCollection[(Math.floor(Math.random() * eventPicCollection.length))]}
                  key={index}
                />
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default WidgetSpinner;
