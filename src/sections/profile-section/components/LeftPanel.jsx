import styles from "../styling/LeftPanel.module.css";
import profilePic from "./DefaultProfilePic.png";
import { Link } from "react-router-dom";

function LeftPanel({ firstName, lastName, courseName }) {
  return (
    <div className={styles.leftPanel}>
      <div className={styles.panelContents}>
        <img src={profilePic} alt="profilePic" />
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{courseName}</p>
        <Link className={styles.btn} to="/mainApp/editProfile">
          Edit Profile
        </Link>
        <Link className={styles.btn} to="/mainApp/mySocieties">
          My Societies
        </Link>
        <Link className={styles.btn} to="/mainApp/myEvents">
          My Events
        </Link>
      </div>
    </div>
  );
}

export default LeftPanel;
