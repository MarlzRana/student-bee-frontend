import styles from "../styling/SearchResult.module.css";
import societyPicCollection from "./societyPicCollection";
import { Link } from "react-router-dom";

function SearchResult({ societyName, link, societyLeader, societyID }) {
  const destination = "/mainApp/societyDetails/" + societyID;
  return (
    <div className={styles.result}>
      <img src={societyPicCollection[(Math.floor(Math.random() * societyPicCollection.length))]} alt="" />
      <div className={styles.resultDetails}>
        <ul>
          <Link className={styles.societyTitle} to={destination}>
            {societyName}
          </Link>
          <li>
            <b>Link: {link}</b>
          </li>
          <li>
            <b>Society Leader: {societyLeader}</b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchResult;
