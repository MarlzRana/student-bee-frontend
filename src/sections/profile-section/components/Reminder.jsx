import styles from "../styling/Reminder.module.css";

function Reminder(props) {
  const { eventDate, eventName } = props;
  return (
    <div class={styles.reminder}>
      <ul>
        <li>
          {eventDate[0]} - {eventName[0]}
        </li>
        <li>
          {eventDate[1]} - {eventName[1]}
        </li>
        <li>
          {eventDate[2]} - {eventName[2]}
        </li>
        <li>
          {eventDate[3]} - {eventName[3]}
        </li>
      </ul>
    </div>
  );
}

export default Reminder;
