import styles from "../styling/SearchResult.module.css";
import placeholder from "../styling/placeholder2.jpg";
import { Link } from "react-router-dom";

function SearchResult() {
    return (
        <div className={styles.result}>
            <img src={placeholder} alt="" />
            <div className={styles.resultDetails}>
                <ul>
                    <Link className={styles.societyTitle} to="/mainApp/societyDetails">
                        Men's Football
                    </Link>
                    <li>
                        <b>Link: </b>
                    </li>
                    <li>
                        <b>Society Leader: </b>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SearchResult;