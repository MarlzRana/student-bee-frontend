import styles from "../styling/JobWidget.module.css";
import { Link } from 'react-router-dom';
import defaultJobImage from "./defaultJobsPic.jpg";

function JobWidget({ jobTitle, jobImage, wage, hoursPerWeek, location, startDate }) {
  return (
    <div className={styles.widget}>
      <div className={styles.mainBody}>
        <h1>{jobTitle}</h1>
        <img src={defaultJobImage} alt="jobImage" />
        <h2>Wage: £{wage}/h</h2>
        <div className={styles.jobInfo}>
          <ul>
            <li><b>Working Hours:</b> <br /> 999hours</li>
            <li><b>Location:</b> <br /> Wilmslow Street</li>
            <li><b>Start Date:</b> <br /> 9/9/2015</li>
          </ul>
        </div>
        <Link className={styles.btn} to='/mainApp/jobDetails'>
          Find out more
        </Link>
      </div>
    </div>
  );
}

export default JobWidget;
