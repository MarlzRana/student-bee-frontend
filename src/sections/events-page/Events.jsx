import { Suspense, lazy } from 'react';
import styles from "./Events.module.css";

const FloatingWidget = lazy(() => import('./components/FloatingWidget'));

function Events() {
  return (
    <div className={styles.events}>
        <Suspense fallback={<div>Loading...</div>}>
            <FloatingWidget/>
        </Suspense>
    </div>
  )
}

export default Events