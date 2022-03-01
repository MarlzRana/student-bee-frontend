import styles from '../styling/JobWidget.module.css';
import defaultJobImage from './defaultJobsPic.jpg';

function JobWidget({jobTitle,jobImage,salary,requirements}) {
  return (
    <div className = {styles.widget}>
        <div className = {styles.mainBody}>
            <h1>{jobTitle}</h1>
            <img src={defaultJobImage} alt = "jobImage"/>
            <h2>Salary: £{salary}</h2>
            <h2>Requirements:</h2>
            <ul>
              {requirements.map(element => <li>{element}</li>)}
            </ul>

            <div className = {styles.btn}>
              <a className={styles.btn} href="#" >Find out more</a>
            </div>
          
        </div>


    

    </div>
  )
}

export default JobWidget;