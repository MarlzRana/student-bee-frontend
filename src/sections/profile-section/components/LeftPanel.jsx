import styles from "../styling/LeftPanel.module.css"
import ProfilePic from './DefaultProfilePic.jpg';
function LeftPanel() {
  return (
    <div  className= {styles.LeftPanel}>
        <div className= {styles.PanelContents}>
            <img src={ProfilePic} alt = "ProfilePic"/>
            <h3>Profile Name</h3>
            <p>Course</p>
            <a className={styles.Btn} href="#" >Edit Profile</a>
            <br></br><a className={styles.Btn} href="#" >My Societies</a>
            <br></br><a className={styles.Btn} href="#">My Jobs</a>
        </div>
    </div>
  )
}

export default LeftPanel