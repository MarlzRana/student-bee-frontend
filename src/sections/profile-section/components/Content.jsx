import styles from "../MySections.module.css";
import { Link } from "react-router-dom";

function Content({ contentBg, contentTitle }) {
    return (
        <div className={styles.contentCircle}>
            <Link className={styles.contentRedirect} to="/mainApp/eventDetails">
                <img 
                    className={styles.contentImg}
                    src={contentBg}
                    alt="" 
                />
                <div className={styles.contentTitle}>{contentTitle}</div>
            </Link>
        </div>
    );
}

export default Content;