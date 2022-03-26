import styles from "../Societies.module.css";
import { Link } from "react-router-dom";

function Society({ societyID, societyName, societyImage }) {
  const address = "/mainApp/societyDetails/" + societyID;
  return (
    <div className={styles.societiesCell}>
      <Link className={styles.societyRedirect} to={address}>
        <img
          src={societyImage}
          alt={societyName}
          className={styles.societiesImage}
        />
        <div className={styles.societiesText}>{societyName}</div>
      </Link>
    </div>
  );
}

export default Society;
