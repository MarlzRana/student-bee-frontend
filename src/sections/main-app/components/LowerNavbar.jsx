import styles from '../styling/LowerNavbar.module.css';
import { Link } from 'react-router-dom';

function LowerNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <ul>
          <li>
            <Link to='/mainApp/home'>
              <i className={styles.hIcon}></i>
              <span className={styles.iconLabel}>Home</span>
            </Link>
          </li>
          <li>
            <Link to='/mainApp/events'>
            <i className={styles.eIcon}></i>
            <span className={styles.iconLabel}>Events</span>
            </Link>
          </li>
          <li>
            <Link to='/mainApp/jobs'>
            <i className={styles.jIcon}></i>
            <span className={styles.iconLabel}>Jobs</span>
            </Link>
          </li>
          <li>
            <Link to='/mainApp/societies'>
            <i className={styles.soIcon}></i>
            <span className={styles.iconLabel}>Societies</span>
            </Link>
          </li>
          {/* <li>
            <Link to='/mainApp/accommodation'>
            <i className={styles.aIcon}></i>
            <span className={styles.iconLabel}>Accommodation</span>
            </Link>
          </li> */}
          <li>
            <Link to='/mainApp/feedback'>
            <i className={styles.fIcon}></i>
            <span className={styles.iconLabel}>Feedback</span>
            </Link>
          </li>
          <li>
            <Link to='/mainApp/support'>
            <i className={styles.suIcon}></i>
            <span className={styles.iconLabel}>Support</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className={styles.rightSection}>
        <input type='text' placeholder='Search' />
      </div> */}
    </nav>
  );
}

export default LowerNavbar;
