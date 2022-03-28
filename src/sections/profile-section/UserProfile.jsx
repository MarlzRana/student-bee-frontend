import styles from "./UserProfile.module.css"
import { Suspense, lazy } from "react"
import DefaultProfilePic from "./components/DefaultProfilePic.jpg"

function UserProfile() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={styles.userPage}>
                <div className={styles.coverPic}></div>
                <div className={styles.userDetails}>
                    <img src={DefaultProfilePic} alt="Profile Pic" />
                    <h1>First Last</h1>
                    <p>1st Year, Computer Science</p>
                    <br />
                    <div className={styles.userDescription}>
                        <h2>About Me</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin purus at odio vehicula consectetur. Donec elementum a erat a maximus. Sed id dolor id urna porttitor elementum. Sed eu nisi at lectus dignissim varius. Donec sit amet dignissim risus. Fusce imperdiet ullamcorper diam vel sodales. Donec erat orci, facilisis a turpis ac, blandit tempus tellus. Duis congue purus id purus maximus cursus.
                        </p>                    
                    </div>
                    <br />
                    <div className={styles.joinedSocieties}>
                        <h2>Societies</h2>
                        <ul>
                            <li>Gaming</li>
                            <li>Computer Science</li>
                            <li>Aerospace</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}

export default UserProfile;