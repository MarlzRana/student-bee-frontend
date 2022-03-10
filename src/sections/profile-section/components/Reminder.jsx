import styles from "../styling/Reminder.module.css";
import { lazy } from "react";

const Reminders = lazy(() => import("./Reminders"));

function Reminder(props) {
  // const format1 = `
  // <div class={styles.reminder}>
  //   <h1>Reminders</h1>
  //   <hr></hr>
  //   <Reminders eventDate="09/10/2021" eventName="Upcoming Event" />
  //   <Reminders eventDate="12/10/2021" eventName="Upcoming Event" />
  // </div>
  // `;
  // const format2 = `
  // <div class={styles.reminder}>
  //   <h1>Reminders</h1>
  //   <hr></hr>
  //   <Reminders eventDate="09/10/2021" eventName="Upcoming Event" />
  //   <Reminders eventDate="12/10/2021" eventName="Upcoming Event" />
  //   <Reminders eventDate="15/12/2021" eventName="Festival" />
  //   <Reminders eventDate="15/12/2021" eventName="COMP10120 Assignment" />
  // </div>
  // `;

  // const mql = window.watchMedia("(max-width: 480px)");
  // const mobileView = mql.matches;
  // const mobileView = true;
  // const { height, width } = useWindowDimensions();
  // return (
  //   <div class={styles.reminder}>
  //     <h1>Reminders</h1>
  //     <hr></hr>
  //     <Reminders eventDate="09/10/2021" eventName="Upcoming Event" />
  //     <Reminders eventDate="12/10/2021" eventName="Upcoming Event" />
  //   </div>
  // );
  if (window.innerWidth < 481) {
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
