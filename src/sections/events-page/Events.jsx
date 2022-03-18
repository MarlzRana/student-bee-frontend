import { Suspense, lazy } from "react";
import styles from "./Events.module.css";

const AddEventWidget = (lazy => import('./components/AddEventWidget'));
const FloatingWidget = (lazy => import('./components/FloatingWidget'));
const WidgetSpinner = (lazy => import('./components/WidgetSpinner'));
const YellowWidget = (lazy => import('./components/YellowWidget'));

function Events() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      test
    </Suspense>
  );
}

export default Events;
