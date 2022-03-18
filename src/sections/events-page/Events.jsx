import { Suspense, lazy } from "react";
import styles from "./Events.module.css";
import img from "./styling/placeholder.jpg";

const AddEventWidget = lazy(() => import('./components/AddEventWidget'));
const WidgetSpinner = lazy(() => import('./components/WidgetSpinner'));
const YellowWidget = lazy(() => import('./components/YellowWidget'));
const UpperNavbar = lazy(() => import('../main-app/components/UpperNavbar'));
const LowerNavbar = lazy(() => import('../main-app/components/LowerNavbar'));

function Events() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpperNavbar/>
      <LowerNavbar/>
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
      
    </Suspense>
  );
}

export default Events;
