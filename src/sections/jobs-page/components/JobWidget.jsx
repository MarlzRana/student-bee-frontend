import styles from "../styling/JobWidget.module.css";
import { Link } from "react-router-dom";

function JobWidget({
  jobID,
  jobTitle,
  jobImage,
  wage,
  hoursPerWeek,
  location,
  startDate,
}) {
  const destination = "/mainApp/jobDetails/" + jobID;
  return (
    <div className={styles.widget}>
      <div className={styles.mainBody}>
        <h1>{jobTitle}</h1>
        <img src={jobImage} alt="jobImage" />
        <h2>Wage: £{wage}/h</h2>
        <div className={styles.jobInfo}>
          <ul>
            <li>
              <b>Working Hours:</b> <br /> {hoursPerWeek} hours
            </li>
            <li>
              <b>Location:</b> <br /> {location}
            </li>
            <li>
              <b>Start Date:</b> <br /> {startDate}
            </li>
          </ul>
        </div>
        <Link className={styles.btn} to={destination}>
          Find out more
        </Link>
      </div>
    </div>
  );
}

export default JobWidget;
