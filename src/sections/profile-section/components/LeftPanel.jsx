import styles from "../styling/LeftPanel.module.css";
import profilePic from "./DefaultProfilePic.jpg";
import { Link } from "react-router-dom";

function LeftPanel() {
  return (
    <div className={styles.leftPanel}>
      <div className={styles.panelContents}>
        <img src={profilePic} alt="profilePic" />
        <h3>Profile Name</h3>
        <p>Course</p>
        <Link className={styles.btn} to='/mainApp/editProfile'>
          Edit Profile
        </Link>
        <Link className={styles.btn} to='/mainApp/mySocieties'>
          My Societies
        </Link>
        <Link className={styles.btn} to='/mainApp/myJobs'>
          My Jobs
        </Link>
      </div>
    </div>
  );
}

export default LeftPanel;
