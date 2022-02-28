import { Suspense, lazy } from 'react';
import styles from "./Events.module.css";

const FloatingWidget = lazy(() => import('./components/FloatingWidget'));

function Events() {
  return (
    <div className={styles.events}>
        <Suspense fallback={<div>Loading...</div>}>
            <FloatingWidget eventName="Music Event" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"/>
        </Suspense>
    </div>
  )
}

export default Events