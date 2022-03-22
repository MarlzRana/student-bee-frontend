import styles from "../styling/Reminders.module.css";

function Reminders(props) {
  const { eventDate, eventName } = props;
  return (
    <div className={styles.reminder}>
      <ul>
        <li>
            {eventDate} - {eventName}
        </li>
      </ul>
    </div>
  );
}

export default Reminders;
