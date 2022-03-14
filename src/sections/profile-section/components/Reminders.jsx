import styles from "../styling/Reminders.module.css";

function Reminders(props) {
  const { eventDate, eventName } = props;
  return (
    <div class={styles.reminder}>
      <ul>
        <li>
          <a href="#">
            {eventDate} - {eventName}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Reminders;
