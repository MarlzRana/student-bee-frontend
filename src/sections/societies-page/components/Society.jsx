import styles from '../Societies.module.css';

function Society({ societyName, societyImage }) {
    return (
        <div className={styles.societiesCell}>
            <img src={societyImage} alt={societyName} className={styles.societiesImage}/>
            <div className={styles.societiesText}>{societyName}</div>
        </div>
    );
}

export default Society;