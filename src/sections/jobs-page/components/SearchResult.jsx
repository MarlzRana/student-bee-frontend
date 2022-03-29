import styles from "../styling/SearchResult.module.css";
import placeholder from "../components/defaultJobsPic.jpg";
import { Link } from "react-router-dom";

function SearchResult() {
    return (
        <div className={styles.result}>
            <img src={placeholder} alt="" />
            <div className={styles.resultDetails}>
                <ul>
                    <Link className={styles.jobTitle} to="/mainApp/jobDetails">
                        Chef
                    </Link>
                    <li>
                        <b>Wage: </b>
                    </li>
                    <li>
                        <b>Hours per week: </b>
                    </li>
                    <li>
                        <b>Location: </b>
                    </li>
                    <li>
                        <b>Start Date: </b>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SearchResult;