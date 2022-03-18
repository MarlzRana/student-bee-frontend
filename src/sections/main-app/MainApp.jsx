import { useParams } from "react-router-dom";
import { Suspense, lazy } from 'react';
import styles from './MainApp.module.css';

const UpperNavbar = lazy(() => import('./components/UpperNavbar'));
const LowerNavbar = lazy(() => import('./components/LowerNavbar'));
const Events = lazy(() => import("../events-page/Events"));
const EventDetails = lazy(() => import("../events-page/EventDetails"));

function MainApp() {
  const subPageName = useParams().subPage;
  return (
    <main className={styles.mainApp}>
      <Suspense fallback={<div>Loading</div>}>
        <UpperNavbar />
        <LowerNavbar />
        {subPageName === "home" ? <></>: <></>}
        {subPageName === "events" ? <Events/> : <></>}
        {subPageName === "eventDetails" ? <EventDetails/> : <></>}
      </Suspense>
    </main>
  );
}

export default MainApp;
