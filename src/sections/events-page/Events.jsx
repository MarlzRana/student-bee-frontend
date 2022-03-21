import { Suspense, lazy, useState } from 'react';
import styles from './Events.module.css';
import img from './styling/placeholder.jpg';

const AddEventWidget = lazy(() => import('./components/AddEventWidget'));
const WidgetSpinner = lazy(() => import('./components/WidgetSpinner'));
const YellowWidget = lazy(() => import('./components/YellowWidget'));

function Events() {
  const [isAddEventWidgetShowing, setIsAddEventWidgetShowing] = useState(false);
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
          <YellowWidget
            eventName='placeholder'
            eventDate='DD/MM/YYYY'
            image={img}
          />
          <YellowWidget
            eventName='placeholder'
            eventDate='DD/MM/YYYY'
            image={img}
          />
          <YellowWidget
            eventName='placeholder'
            eventDate='DD/MM/YYYY'
            image={img}
          />
          <YellowWidget
            eventName='placeholder'
            eventDate='DD/MM/YYYY'
            image={img}
          />
          <YellowWidget
            eventName='placeholder'
            eventDate='DD/MM/YYYY'
            image={img}
          />
          <YellowWidget
            eventName='placeholder'
            eventDate='DD/MM/YYYY'
            image={img}
          />
          <YellowWidget
            eventName='placeholder'
            eventDate='DD/MM/YYYY'
            image={img}
          />
          <YellowWidget
            eventName='placeholder'
            eventDate='DD/MM/YYYY'
            image={img}
          />
          <YellowWidget
            eventName='placeholder'
            eventDate='DD/MM/YYYY'
            image={img}
          />
          <YellowWidget
            eventName='placeholder'
            eventDate='DD/MM/YYYY'
            image={img}
          />
          <YellowWidget
            eventName='placeholder'
            eventDate='DD/MM/YYYY'
            image={img}
          />
          <YellowWidget
            eventName='placeholder'
            eventDate='DD/MM/YYYY'
            image={img}
          />
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
        title='Add an event!'
        onClick={() => setIsAddEventWidgetShowing(true)}
        className={styles.addEvent}
      >
        +
      </button>
    </Suspense>
  );
}

export default Events;
