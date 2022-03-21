import React from "react";
import styles from "../styling/NotificationPanel.module.css";
function Notifications({ name, description, image }) {
  return (
    <div>
      <div className={styles.notificationImage}>
        <img src={image} alt="NImage" />
      </div>
      <div>
        <b>{name}</b> {description}
      </div>
    </div>
  );
}
export default Notifications;
