import styles from "../styling/LeftPanel.module.css"
import profilePic from './DefaultProfilePic.jpg';
function LeftPanel() {
  return (
    <div  className= {styles.leftPanel}>
        <div className= {styles.panelContents}>
            <img src={profilePic} alt = "profilePic"/>
            <h3>Profile Name</h3>
            <p>Course</p>
            <a className={styles.btn} href="#" >Edit Profile</a>
            <br></br><a className={styles.btn} href="#" >My Societies</a>
            <br></br><a className={styles.btn} href="#">My Jobs</a>
        </div>
    </div>
  )
}

export default LeftPanel