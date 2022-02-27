import styles from '../styling/LowerNavbar.module.css';
function LowerNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#events'>Events</a>
          </li>
          <li>
            <a href='#jobs'>Jobs</a>
          </li>
          <li>
            <a href='#jobs'>Societies</a>
          </li>
          <li>
            <a href='#accommodation'>Accommodation</a>
          </li>
          <li>
            <a href='#feedback'>Feedback</a>
          </li>
          <li>
            <a href='#support'>Support</a>
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
