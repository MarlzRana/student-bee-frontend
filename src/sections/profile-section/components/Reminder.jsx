import styles from "../styling/Reminder.module.css";

function Reminder(props) {
  const { eventDate, eventName } = props;
  return (
    <div class={styles.reminder}>
      <h1>Reminders</h1>
      <hr></hr>
      <ul>
        <li>
          <a href="#">
            {eventDate[0]} - {eventName[0]}
          </a>
        </li>
        <li>
          <a href="#">
            {eventDate[1]} - {eventName[1]}
          </a>
        </li>
        <li>
          <a href="#">
            {eventDate[2]} - {eventName[2]}
          </a>
        </li>
        <li>
          <a href="#">
            {eventDate[3]} - {eventName[3]}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Reminder;
