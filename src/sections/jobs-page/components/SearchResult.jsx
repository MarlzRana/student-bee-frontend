import styles from "../styling/SearchResult.module.css";
import placeholder from "../components/defaultJobsPic.jpg";
import { Link } from "react-router-dom";

function SearchResult({ jobTitle, wage, hours, location, startDate, jobID }) {
  const destination = "/mainApp/jobDetails/" + jobID;
  return (
    <div className={styles.result}>
      <img src={placeholder} alt="" />
      <div className={styles.resultDetails}>
        <ul>
          <Link className={styles.jobTitle} to={destination}>
            {jobTitle}
          </Link>
          <li>
            <b>Wage: £{wage}</b>
          </li>
          <li>
            <b>Hours per week: {hours}</b>
          </li>
          <li>
            <b>Location: {location}</b>
          </li>
          <li>
            <b>Start Date: {startDate}</b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchResult;
