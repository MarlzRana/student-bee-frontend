import styles from "../styling/NotificationPanel.module.css";
function Notifications({ name, description, image, notificationTime }) {
  return (
    <div className={styles.notificationContent}>
      <div className={styles.notificationImage}>
        <img src={image} alt="NImage" />
      </div>
      <div className={styles.userNotification}>
        <p><b>{name}</b> {description}</p>
        <div className={styles.timeOfNotification}>{notificationTime}</div>
      </div>
    </div>
  );
}
export default Notifications;
