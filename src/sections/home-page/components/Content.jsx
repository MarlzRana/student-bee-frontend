import styles from '../styling/Content.module.css';
import bgfeatures from './bg-features.png';
import eventIcon from './event-icon.png';
import jobIcon from './job-icon.png'; 
import societyIcon from './society-icon.png';
import accomIcon from './accom-icon.png';
import feedbackIcon from './feedback-icon.png';
import supportIcon from './support-icon.png';

function HomePageContent() {
  return (
    <>
      {/* Welcome section */}
      <section>
        <div className={styles.placeholder}>
          placeholder
        </div>
      </section>
      
      {/* Features section */}
      <section>
        <div className={styles.featuresContainer}>
          <img src={bgfeatures} className={styles.featureBG} alt="background"/>
          <div className={styles.topLeft}><h2>Features</h2></div>
          <div className={styles.featureContents}>
            <div className={styles.feature}>
              <img src={eventIcon} className={styles.icon} alt="event icon"/>
              <h2>Events</h2>
              <p>Keep up to date with the latest events</p>
            </div>
            <div className={styles.feature}>
            <img src={jobIcon} className={styles.icon} alt="job icon"/>
              <h2>Jobs</h2>
              <p>Finding jobs has never been easier</p>
            </div>
            <div className={styles.feature}>
              <img src={societyIcon} className={styles.icon} alt="society icon"/>
              <h2>Societies</h2>
              <p>Meet other people with similar interests</p>
            </div>
            <div className={styles.feature}>
            <img src={accomIcon} className={styles.icon} alt="accommodation icon"/>
              <h2>Accommodation</h2>
              <p>It is never too late to get a comfy home</p>
            </div>
            <div className={styles.feature}>
            <img src={feedbackIcon} className={styles.icon} alt="feedback icon"/>
              <h2>Feedback</h2>
              <p>Taking your suggestions into consideration</p>
            </div>
            <div className={styles.feature}>
              <img src={supportIcon} className={styles.icon} alt="support icon"/>
              <h2>Support</h2>
              <p>Questions ready to be answered</p>
            </div>
          </div>
        </div>
      </section>
    </>  
  );
}

export default HomePageContent;
