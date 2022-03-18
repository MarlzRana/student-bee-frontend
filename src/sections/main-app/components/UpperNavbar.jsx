import styles from '../styling/UpperNavbar.module.css';
import { Link } from 'react-router-dom';

function UpperNavbar() {
  return (
    <div>
      <nav className={styles.mainNavbar}>
        <div className={styles.leftSection}>
          <h1>StudentBee</h1>
        </div>
        <div className={styles.rightSection}>
          <Link to="/">Log Out</Link>
        </div>
      </nav>
    </div>
  );
}

export default UpperNavbar;
