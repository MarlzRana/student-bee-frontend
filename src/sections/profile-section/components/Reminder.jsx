import styles from "../styling/Reminder.module.css";
import { lazy, useState, useEffect } from "react";

const Reminders = lazy(() => import("./Reminders"));

//Listening for a screen resize
function Reminder() {
  //useState hook adds the state of the screen width to this stateless
  //function component. We use the window's width as the state
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });

  //Applies the resizing to the component using the useEffect Hook.
  //Runs whenever window width changes
  useEffect(() => {
    const resizeWidget = function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    };

    //Event listener. If window resizes, resize function called
    window.addEventListener("resize", resizeWidget);

    return (_) => {
      window.removeEventListener("resize", resizeWidget);
    };
  }, [dimensions.width]);

  if (dimensions.width < 481) {
    return (
      <div class={styles.reminder}>
        <h1>Reminders</h1>
        <hr></hr>
        <Reminders eventDate="09/10/2021" eventName="Upcoming Event" />
        <Reminders eventDate="12/10/2021" eventName="Upcoming Event" />
      </div>
    );
  } else {
    return (
      <div class={styles.reminder}>
        <h1>Reminders</h1>
        <hr></hr>
        <Reminders eventDate="09/10/2021" eventName="Upcoming Event" />
        <Reminders eventDate="12/10/2021" eventName="Upcoming Event" />
        <Reminders eventDate="15/12/2021" eventName="Festival" />
        <Reminders eventDate="15/12/2021" eventName="COMP10120 Assignment" />
      </div>
    );
  }
}

export default Reminder;
