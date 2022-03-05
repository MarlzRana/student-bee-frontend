import { Suspense, lazy } from "react";
import styles from "./Events.module.css";
import img from "./styling/placeholder.jpg";

const FloatingWidget = lazy(() => import("./components/FloatingWidget"));
const YellowWidget = lazy(() => import("./components/YellowWidget"));

function Events() {
  return (
    <div className={styles.events}>
      <Suspense fallback={<div>Loading...</div>}>
        <FloatingWidget
          eventName="Music Event"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sgaittis dictum mauris, eget tincidunt nulla dignissim ut. Quisque cursus ante placerat, auctor tellus vitae, accumsan neque. Etiam a tincidunt lorem. Nam magna erat, posuere vitae viverra nec, mollis sit amet libero. as da sda sd ad asd a "
          image={img}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <YellowWidget
          eventName="Cosplay Party"
          eventDate="23/03/2022"
          image={img}
        />
      </Suspense>
    </div>
  );
}

export default Events;
