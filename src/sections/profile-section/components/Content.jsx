import styles from "../MySections.module.css";
import { Link } from "react-router-dom";
import placeholder from "../../events-page/styling/placeholder.jpg";

function Content() {
    return (
        <div className={styles.contentCircle}>
            <Link className={styles.myRedirect} to="/mainApp/eventDetails">
                <img 
                    className={styles.contentImg}
                    src={placeholder} 
                    alt="" 
                />
                <div className={styles.contentText}></div>
            </Link>
        </div>
    );
}

export default Content;