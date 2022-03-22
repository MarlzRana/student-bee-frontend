import styles from "../styling/NotificationPanel.module.css";
import Notifications from "./Notifications";
import DefaultPfP from "./DefaultProfilePic.jpg";

function NotificationPanel() {
  return (
    <div className={styles.notificationPanel}>
      <div className={styles.notificationTitle}>
        <h1>Notifications</h1>
      </div>
      <div className={styles.notifications}>
        <Notifications image={DefaultPfP} name="XXX" description="added you" notificationTime="1h ago"/>
        <Notifications image={DefaultPfP} name="YYY" description="recommended you to attend the Music Festival" notificationTime="2h ago"/>
        <Notifications image={DefaultPfP} name="You" description="managed to land the X job" notificationTime="3h ago"/>
      </div>
    </div>
  );
}

export default NotificationPanel;
