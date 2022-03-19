import { Suspense, lazy, useState } from "react";
import styles from "./Events.module.css";
import img from "./styling/placeholder.jpg";

const AddEventWidget = lazy(() => import('./components/AddEventWidget'));
const WidgetSpinner = lazy(() => import('./components/WidgetSpinner'));
const YellowWidget = lazy(() => import('./components/YellowWidget'));

function Events() {

  const [addEventWidget, setAddEventWidget] = useState(false)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.topContent}>
        <h1 className={styles.title}>Events</h1>
        <div className={styles.widgetSpinner}>
          <WidgetSpinner/>
        </div>
      </div> 
      <div className={styles.lowerContent}>
        <div className={styles.eventsList}>
          <YellowWidget eventName="placeholder" eventDate="DD/MM/YYYY" image={img}/>
          <YellowWidget eventName="placeholder" eventDate="DD/MM/YYYY" image={img}/>
          <YellowWidget eventName="placeholder" eventDate="DD/MM/YYYY" image={img}/>
          <YellowWidget eventName="placeholder" eventDate="DD/MM/YYYY" image={img}/>
          <YellowWidget eventName="placeholder" eventDate="DD/MM/YYYY" image={img}/>
          <YellowWidget eventName="placeholder" eventDate="DD/MM/YYYY" image={img}/>
          <YellowWidget eventName="placeholder" eventDate="DD/MM/YYYY" image={img}/>
          <YellowWidget eventName="placeholder" eventDate="DD/MM/YYYY" image={img}/>
          <YellowWidget eventName="placeholder" eventDate="DD/MM/YYYY" image={img}/>
          <YellowWidget eventName="placeholder" eventDate="DD/MM/YYYY" image={img}/>
          <YellowWidget eventName="placeholder" eventDate="DD/MM/YYYY" image={img}/>
          <YellowWidget eventName="placeholder" eventDate="DD/MM/YYYY" image={img}/>
        </div>
      </div> 
      {addEventWidget ? (<AddEventWidget add={addEventWidget} setAdd={setAddEventWidget}/>) : (<></>)}
      <button title="Add an event!" onClick={() => setAddEventWidget(true)} className={styles.addEvent}>
        +
      </button>
    </Suspense>
  );
}

export default Events;
