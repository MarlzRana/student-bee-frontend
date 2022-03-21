import React from "react";
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
        <Notifications image={DefaultPfP} name="alex" description="hi" />
        <Notifications image={DefaultPfP} name="raq" description=" yo" />
        <Notifications image={DefaultPfP} name="daisy" description="hi there" />
      </div>
    </div>
  );
}

export default NotificationPanel;
