import styles from '../SocietyDetails.module.css';

function SocietyMember({ profilePic, firstName, lastName }) {
    return (
        <div className={styles.societyMember}>
            <img src={profilePic} alt="User's profile pic" />
            <span className={styles.userLabel}>{firstName} {lastName}</span>
        </div>
    );
}

export default SocietyMember;