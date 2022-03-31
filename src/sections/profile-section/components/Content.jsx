import styles from "../MySections.module.css";
import { Link } from "react-router-dom";

function Content({ contentType, contentBg, contentTitle }) {
    return (
        <div className={styles.contentCircle}>
            <Link className={styles.contentRedirect} to={"/mainApp/" + contentType + "Details"}>
                <img 
                    className={styles.contentImg}
                    src={contentBg}
                    alt={contentTitle}
                />
                <div className={styles.contentTitle}>{contentTitle}</div>
            </Link>
        </div>
    );
}

export default Content;