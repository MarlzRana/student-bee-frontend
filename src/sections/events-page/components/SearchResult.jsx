import styles from "../styling/SearchResult.module.css";
import placeholder from "../styling/placeholder.jpg";
import { Link } from "react-router-dom";

function SearchResult() {
    return (
        <div className={styles.result}>
            <img src={placeholder} alt="" />
            <div className={styles.resultDetails}>
                <ul>
                    <Link className={styles.eventTitle} to="/mainApp/eventDetails">
                        Concert
                    </Link>
                    <li>
                        <b>Start Date: </b>
                    </li>
                    <li>
                        <b>End Date: </b>
                    </li>
                    <li>
                        <b>Location: </b>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SearchResult;