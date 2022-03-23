import styles from '../Societies.module.css';
import { Link } from 'react-router-dom';

function Society({ societyName, societyImage }) {
    return (
        <div className={styles.societiesCell}>
            <Link className={styles.societyRedirect} to='/mainApp/societyDetails'>
                <img src={societyImage} alt={societyName} className={styles.societiesImage}/>
                <div className={styles.societiesText}>{societyName}</div>
            </Link>
        </div>
    );
}

export default Society;