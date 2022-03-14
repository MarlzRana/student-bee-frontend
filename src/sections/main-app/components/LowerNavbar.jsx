import styles from '../styling/LowerNavbar.module.css';
function LowerNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <ul>
          <li>
            <a href='#home'>
              <i className={styles.hIcon}></i>
              <span className={styles.iconLabel}>Home</span>
            </a>
          </li>
          <li>
            <a href='#events'>
            <i className={styles.eIcon}></i>
            <span className={styles.iconLabel}>Events</span>
            </a>
          </li>
          <li>
            <a href='#jobs'>
            <i className={styles.jIcon}></i>
            <span className={styles.iconLabel}>Jobs</span>
            </a>
          </li>
          <li>
            <a href='#societies'>
            <i className={styles.soIcon}></i>
            <span className={styles.iconLabel}>Societies</span>
            </a>
          </li>
          <li>
            <a href='#accommodation'>
            <i className={styles.aIcon}></i>
            <span className={styles.iconLabel}>Accommodation</span>
            </a>
          </li>
          <li>
            <a href='#feedback'>
            <i className={styles.fIcon}></i>
            <span className={styles.iconLabel}>Feedback</span>
            </a>
          </li>
          <li>
            <a href='#support'>
            <i className={styles.suIcon}></i>
            <span className={styles.iconLabel}>Support</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.rightSection}>
        <input type='text' placeholder='Search' />
      </div>
    </nav>
  );
}

export default LowerNavbar;
